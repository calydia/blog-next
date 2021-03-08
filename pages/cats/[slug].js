import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';

export default function BlogPage({ post }) {

  return (
    <div>
      <h1>{ post.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
    query GetCatBlogs {
      articles(category: 2, limit: 100) {
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
      query GetCatBlog($slug: String!) {
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