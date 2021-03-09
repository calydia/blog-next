import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ page }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to my blog! | Blog - Sanna Mäkinen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          { page.page.title }
        </h1>
        <div className="front-category-cats"><h2>Newest from Cats</h2></div>
        <div className="front-category-life"><h2>Newest from Life</h2></div>
        <div className="front-category-games"><h2>Newest from Games</h2></div>
        <div className="front-category-tech"><h2>Newest from Tech</h2></div>
        <div className="front-category-a11y"><h2>Newest from Accessibility</h2></div>
      </main>

      <footer className={styles.footer}>

      </footer>
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

  return {
    props: {
      page: result.data
    }
  };
}
