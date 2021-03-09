import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';
import Image from 'next/image';
import dayjs from 'dayjs';

export default function BlogPage({ page, newest, listing }) {
  return (
    <div>
      <h1 id="skip-target">{ page.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }}></div>

      <div className="blog-listing">
        <ul className="blog-category-articles">

        {newest.items.map((node, index) => {
              return (
                <li key={`list-item${index}`} className="blog-list-item newest-blog">
                  <a key={index} className="post" href="/" aria-labelledby={`first-blog-title${index}`}>
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
                  <a key={index} className="post" href="/" aria-labelledby={`blog-title${index}`}>
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
      </div>

    </div>
  );
}

export async function getStaticProps() {
  const page = await client.query({
    query: gql`
      query GetBlogLifeListingPage {
        page(id: 42) {
          title
          content
        }
      }
    `
  });

  const newest = await client.query({
    query: gql`
      query GetNewestLifeArticle {
        articles(limit: 1, category: 4) {
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
      query GetOtherLifeArticles {
        articles(limit: 100, category: 4, offset: 1) {
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
