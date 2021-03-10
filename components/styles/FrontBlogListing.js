import styled from 'styled-components';

const FrontBlogListing = styled.div`
  margin: 0 auto;
  max-width: 80em;
  padding: 2em 2em;
  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px 30px;
    list-style: none;
    margin: 0;
    padding-left: 0;
    width: 100%;
    @media only screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px 30px;
    }
    @media only screen and (min-width: 940px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 50px 50px;
    }
  }
  .blog-list-item {
    background-color: ${({ theme }) => theme.listingBg};
  }
  .blog-listing-title {
    display: block;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.5;
    padding: 1em 0.5em 1em 0.5em;
    &::after {
      background-color: ${({ theme }) => theme.mainLink};
      content: '';
      display: block;
      margin: 0.5em auto 0 auto;
      height: 2px;
      width: 40px;
    }
  }
  .blog-info {
    display: block;
    padding-bottom: 1em;
  }
  li {
    align-items: stretch;
    border: 3px solid;
    border-image: ${({ theme }) => theme.gradient};
    border-image-slice: 1;
    display: flex;
    padding: 0.5em;
    text-align: center;
  }
  .newest-blog {
    @media only screen and (min-width: 768px) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    @media only screen and (min-width: 940px) {
      grid-column-start: 1;
      grid-column-end: 4;
    }
    a {
      list-style: none;
      margin: 0;
      padding-left: 0;
      width: 100%;
      @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 50% 1fr;
        grid-gap: 30px 30px;
      }
      @media only screen and (min-width: 768px) {
        .post-content {
          align-self: center;
        }
        .blog-listing-title {
          font-size: 1.7rem;
        }
        .blog-info {
          font-size: 1.3rem;
        }
      }
      @media only screen and (min-width: 940px) {
        .blog-listing-title {
          font-size: 2rem;
        }
        .blog-info {
          font-size: 1.4rem;
        }
      }
    }
  }
  a {
    display: block;
    width: 100%;
    &:hover {
      text-decoration: none;
      .blog-listing-title {
        color: ${({ theme }) => theme.linkColor};
        text-decoration: underline;
      }
    }
    &:focus {
      outline: 5px dashed ${({ theme }) => theme.mainLink};
      outline-offset: 15px;
    }
  }
`;

export default FrontBlogListing;