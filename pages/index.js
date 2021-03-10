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
    <div>
      <Head>
        <title>Welcome to my blog! | Blog - Sanna Mäkinen</title>
      </Head>

      <main>
        <FrontHeading id="skip-target">
          { page.page.title }
        </FrontHeading>
        <div className="front-category-cats">
          <FrontBlogListing>
          <ul className="blog-category-articles">

{newest.items.map((node, index) => {
      return (
        <li key={`list-item${index}`} className="blog-list-item newest-blog">
          <a key={index} className="post" href={`/a11y/${node.slug}`} aria-labelledby={`first-blog-title${index}`}>
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
          <a key={index} className="post" href={`/a11y/${node.slug}`} aria-labelledby={`blog-title${index}`}>
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
        </FrontBlogListing>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetBlogFrontPage {
        page(id: 40) {
          title
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
      page: result.data,
      newest: newest.data.articles,
      listing: listing.data.articles
    }
  };
}
