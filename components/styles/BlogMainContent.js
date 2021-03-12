import styled from 'styled-components';

const BlogMainContent = styled.div`
  background: transparent;
  color: ${({ theme }) => theme.postText};
  font-size: 1.4rem;
  line-height: 1.5;
  padding: 0.5em 1.5em;
  max-width: 1000px;
  width: 100%;
  @media only screen and (min-width: 1000px) {
    font-size: 1.4rem;
    line-height: 1.5;
    padding: 1.5em 2em;
  }
  .blog-info {
    font-size: 1.2rem;
  }
  h1 {
    font-size: 1.8rem;
    line-height: 1.3;
    margin-bottom: 0.2em;
    @media only screen and (min-width: 1000px) {
      font-size: 2.2rem;
      line-height: 1.2;
    }
  }
  h2 {
    font-size: 1.7rem;
    line-height: 1.2;
    @media only screen and (min-width: 1000px) {
      font-size: 2rem;
      line-height: 1.3;
    }
  }
  a {
    color: ${({ theme }) => theme.postLink};
    text-decoration: underline;
    &:focus,
    &:hover {
      color: ${({ theme }) => theme.postLinkHover};
      outline: 1px solid ${({ theme }) => theme.postLinkHover};
      outline-offset: 2px;
      text-decoration: none;
    }
    &:focus {
      outline: 3px dashed ${({ theme }) => theme.postLinkHover};
      outline-offset: 0;
    }
  }
`;

export default BlogMainContent;
