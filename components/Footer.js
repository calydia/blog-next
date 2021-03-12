import styled from 'styled-components';
import Image from 'next/image';

const Footer = () => {


  const FooterStyles = styled.footer`
    background-color: ${({ theme }) => theme.footerBg};
    margin-top: 3em;
    padding: 3em;
    .footer-content {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      margin: 0 auto;
      max-width: 1500px;
      width: 95%;
      @media only screen and (min-width: 700px) {
        justify-content: space-between;
        flex-flow: row nowrap;
      }
      .links {
        display: flex;
        flex-flow: row wrap;
        @media only screen and (min-width: 700px) {
          flex-flow: row nowrap;
        }
      }
    }
    a {
      color: ${({ theme }) => theme.footerLink};
      font-size: 1.25rem;
      &:hover {
        color: ${({ theme }) => theme.footerLinkHover};
      }
      &:focus {
        color: ${({ theme }) => theme.footerLinkHover};
        outline: 5px dashed ${({ theme }) => theme.footerBorder};
        outline-offset: 5px;
      }
    }
    .portfolio-link {
      align-items: center;
      border: 1px solid transparent;
      display: flex;
      font-weight: bold;
      margin: 0.2em;
      padding: 0.5em;
      &:hover {
        border: 1px solid ${({ theme }) => theme.footerBorder};
      }
      .portfolio-icon {
        background-image: ${({ theme }) => theme.footerLogo};
        background-position: left center;
        background-repeat: no-repeat;
        background-size: 35px 27px;
        display: block;
        height: 27px;
        margin-right: 10px;
        width: 35px;
      }
    }

    .twitter-link {
      border: 1px solid transparent;
      display: block;
      font-weight: bold;
      margin: 0.2em;
      padding: 0.5em;
      &:hover {
        border: 1px solid ${({ theme }) => theme.footerBorder};
      }
      svg {
        height: 30px;
        width: 30px;
      }
    }
    .somelink {
      align-items: center;
      display: flex;
    }
    .link-name {
      margin-left: 10px;
    }
  `;

  return (
    <FooterStyles>
      <div className="footer-content">
        <a
          href="https://sanna.ninja"
          className="portfolio-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="portfolio-icon" aria-hidden="true"></span>
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
        </div>
      </div>
      <script src="/skip-content.js" />
    </FooterStyles>
  );
};

export default Footer;
