import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';
import Image from 'next/image';
import dayjs from 'dayjs';
import BlogListing from '../../components/styles/BlogListing';
import BlogCategoryContent from '../../components/styles/BlogCategoryContent';

export default function BlogPage({ page, newest, listing }) {
  return (
    <div>
      <BlogCategoryContent>
        <h1 id="skip-target">{ page.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
      </BlogCategoryContent>
      <BlogListing>
        <ul className="blog-category-articles">

        {newest.items.map((node, index) => {
              return (
                <li key={`list-item${index}`} className="blog-list-item newest-blog">
                  <a key={index} className="post" href={`/games/${node.slug}`} aria-labelledby={`first-blog-title${index}`}>
                    <Image
                      src={node.listingImage}
                      alt=""
                      width={1025}
                      height={600}
                      layout="responsive"
                    />
                    <div className="post-content">
                      <span id={`first-blog-title${index}`} className="blog-listing-title">
                        {node.title}
                      </span>
                      <span className="blog-info">
                        {dayjs(node.date)
                          .format(`DD.MM.YYYY`)}{' '}
                        | {node.category}
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}

        {listing.items.map((node, index) => {
              return (
                <li key={`list-item${index}`} className="blog-list-item">
                  <a key={index} className="post" href={`/games/${node.slug}`} aria-labelledby={`blog-title${index}`}>
                    <Image
                      src={node.listingImage}
                      alt=""
                      width={1025}
                      height={600}
                      layout="responsive"
                    />
                    <div className="post-content">
                      <span id={`blog-title${index}`} className="blog-listing-title">
                        {node.title}
                      </span>
                      <span className="blog-info">
                        {dayjs(node.date)
                          .format(`DD.MM.YYYY`)}{' '}
                        | {node.category}
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}
        </ul>
      </BlogListing>

    </div>
  );
}

export async function getStaticProps() {
  const page = await client.query({
    query: gql`
      query GetBlogGamesListingPage {
        page(id: 43) {
          title
          content
        }
      }
    `
  });

  const newest = await client.query({
    query: gql`
      query GetNewestGamesArticle {
        articles(limit: 1, category: 6) {
          items {
            title
            slug
            date
            listingImage
            category
          }
        }
      }
    `
  });

  const listing = await client.query({
    query: gql`
      query GetOtherGamesArticles {
        articles(limit: 100, category: 6, offset: 1) {
          items {
            title
            slug
            date
            listingImage
            category
          }
        }
      }
    `
  });

  return {
    props: {
      page: page.data.page,
      newest: newest.data.articles,
      listing: listing.data.articles
    }
  };
}
