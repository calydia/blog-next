import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import Head from 'next/head';
import dayjs from 'dayjs';
import Image from 'next/image';
import FrontBlogListing from '../components/styles/FrontBlogListing';
import styled from 'styled-components';

export default function Home({ page, newest, listing }) {

  const FrontHeading = styled.h1`
    font-size: 2rem;
    line-height: 1.3;
    margin-top: 1.5em;
    text-align: center;
    @media only screen and (min-width: 940px) {
      font-size: 4rem;
      line-height: 1.2;
      margin-top: 1.2em;
    }
  `;

  return (
    <main>
      <Head>
        <title>Welcome to my blog! | Blog - Sanna Mäkinen</title>
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
        <FrontHeading id="skip-target">
          { page.title }
        </FrontHeading>
        <FrontBlogListing>
        <ul className="blog-category-articles" role="list">
          {newest.items.map((node, index) => {
                return (
                  <li key={`list-item${index}`} className="blog-list-item newest-blog">
                    <a key={index} className="post" href={`/${node.category.toLowerCase()}/${node.slug}`}
                      aria-label={`${node.title} on ${dayjs(node.date).format(`MMMM DD, YYYY`)} in category ${node.category}`}>
                      <Image
                        src={node.listingImage}
                        alt=""
                        width={1025}
                        height={600}
                        layout="responsive"
                      />
                      <div className="post-content" aria-hidden="true">
                        <span id={`first-blog-title${index}`} className="blog-listing-title">
                          {node.title}
                        </span>
                        <span className="visually-hidden">on</span>
                        <span className="blog-info">
                        {dayjs(node.date)
                            .format(`MMMM DD, YYYY`)}{' '}
                          | <span className="visually-hidden">in category</span> {node.category}
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
                    <a key={index} className="post" href={`/${node.category.toLowerCase()}/${node.slug}`}
                    aria-label={`${node.title} on ${dayjs(node.date).format(`MMMM DD, YYYY`)} in category ${node.category}`}>
                      <Image
                        src={node.listingImage}
                        alt=""
                        width={1025}
                        height={600}
                        layout="responsive"
                      />
                      <div className="post-content" aria-hidden="true">
                        <span id={`blog-title${index}`} className="blog-listing-title">
                          {node.title}
                        </span>
                        <span className="visually-hidden">on</span>
                        <span className="blog-info">
                          {dayjs(node.date)
                            .format(`MMMM DD, YYYY`)}{' '}
                          | <span className="visually-hidden">in category</span> {node.category}
                        </span>
                      </div>
                    </a>
                  </li>
                );
              }
            )
          }
          </ul>
      </FrontBlogListing>
    </main>
  )
}

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetBlogFrontPage {
        page(id: 40) {
          title
          metaDescription
        }
      }
    `
  });

  const newest = await client.query({
    query: gql`
      query GetNewestArticle {
        articles(limit: 1) {
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
      query GetOtherArticles {
        articles(limit: 100, offset: 1) {
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
      page: result.data.page,
      newest: newest.data.articles,
      listing: listing.data.articles
    }
  };
}
