import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <a
          href="https://sanna.ninja"
          className="portfolio-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="portfolio-icon"></span>
          My portfolio
        </a>
        <div className="links">
          <a
            href="https://twitter.com/schalallalaa"
            className="twitter-link somelink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/twitter.svg"
              alt=""
              width={30}
              height={30}
              aria-hidden="true"
            />
            <span className="link-name">My Twitter profile</span>
          </a>
          <a href="/rss.xml" className="rss-link somelink">
            <Image
              src="/icons/rss.svg"
              alt=""
              width={30}
              height={30}
              aria-hidden="true"
            />
            <span className="link-name">Blog RSS feed</span>
          </a>
        </div>
      </div>
      <script src="/skip-content.js" type="text/javascript" />
    </footer>
  );
};

export default Footer;