import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';
import dayjs from 'dayjs';
import Image from 'next/image';
import BlogWrapper from '../../components/styles/BlogWrapper';
import BlogMainContent from '../../components/styles/BlogMainContent';
import BlogWriterContent from '../../components/styles/BlogWriterContent';
import Head from 'next/head';

export default function BlogPage({ post }) {

  return (
    <main>
      <Head>
        <title>{post.title} | Blog - Sanna Mäkinen</title>
        <meta name="Description" content={post.metaDescription} />
        <meta
          property="og:description"
          content={post.metaDescription}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Blog - Sanna Mäkinen" />
        <meta property="og:image" content={post.mainImage} />
      </Head>
      <BlogWrapper>
        <div className="blog-main-image-wrapper">
          <Image
            src={post.mainImage}
            alt=""
            width={1500}
            height={600}
            layout="intrinsic"
          />
        </div>
        <BlogMainContent>
          <h1 id="skip-target">{ post.title }</h1>
          <span className="blog-info">
            {dayjs(post.date)
              .format(`DD.MM.YYYY`)}{' '}
            | {post.category}
          </span>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          <div dangerouslySetInnerHTML={{ __html: post.imageCredits }}></div>
        </BlogMainContent>
        <BlogWriterContent>
          <article className="info-box">
            <div className="info-content">
              <div className="writer-image-wrapper">
                <Image
                  src={post.authorImage}
                  alt=""
                  width={150}
                  height={150}
                  layout="fixed"
                  className="writer-image"
                />
              </div>
              <span className="name">{ post.authorName }</span>
              <div dangerouslySetInnerHTML={{ __html: post.authorContent }}></div>
            </div>
          </article>
        </BlogWriterContent>
      </BlogWrapper>
    </main>
  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
    query GetGameBlogs {
      articles(category: 6, limit: 100) {
        items {
          slug
        }
      }
    }
    `
  });

  return {
    paths: result.data.articles.items.map(({ slug }) => {
      return {
        params: { slug }
      }
    }),
    fallback: false
  }
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const result = await client.query({
    query: gql`
      query GetGameBlog($slug: String!) {
        articleSlug(slug: $slug) {
          title
          authorContent
          authorImage
          authorName
          category
          content
          date
          id
          imageCredits
          slug
          published
          mainImage
          listingImage
          metaDescription
        }
      }
      
    `,
    variables: { slug }
  });

  return {
    props: {
      post: result.data.articleSlug
    }
  };
}