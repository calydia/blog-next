import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';
import Head from 'next/head';
import Image from 'next/image';
import dayjs from 'dayjs';
import BlogListing from '../../components/styles/BlogListing';
import BlogCategoryContent from '../../components/styles/BlogCategoryContent';


export default function BlogPage({ page, newest, listing }) {
  return (
    <div>
      <Head>
        <title>Cats | Blog - Sanna Mäkinen</title>
        <meta name="Description" content={page.metaDescription} />
        <meta
          property="og:description"
          content={page.metaDescription}
        />
        <meta property="og:title" content={ page.title } />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Blog - Sanna Mäkinen" />
        <meta property="og:image" content="https://blog.sanna.ninja/images/osiris.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <BlogCategoryContent>
        <h1 id="skip-target">{ page.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
      </BlogCategoryContent>
      <BlogListing>
        <ul className="blog-category-articles">
          {newest.items.map((node, index) => {
                return (
                  <li key={`list-item${index}`} className="blog-list-item newest-blog">
                    <a key={index} className="post" href={`/cats/${node.slug}`} aria-labelledby={`first-blog-title${index}`}>
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
              }
            )
          }
          {listing.items.map((node, index) => {
                return (
                  <li key={`list-item${index}`} className="blog-list-item">
                    <a key={index} className="post" href={`/cats/${node.slug}`} aria-labelledby={`blog-title${index}`}>
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
              }
            )
          }
        </ul>
      </BlogListing>

    </div>
  );
}

export async function getStaticProps() {
  const page = await client.query({
    query: gql`
      query GetBlogCatsListingPage {
        page(id: 44) {
          title
          content
          metaDescription
        }
      }
    `
  });

  const newest = await client.query({
    query: gql`
      query GetNewestCatsArticle {
        articles(limit: 1, category: 2) {
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
      query GetOtherCatsArticles {
        articles(limit: 100, category: 2, offset: 1) {
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
