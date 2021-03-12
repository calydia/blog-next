import styled from 'styled-components';

const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 1564px;
  padding: 0;
  width: 100%;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 280px;
    grid-gap: 0 30px;
    padding: 0 2em;
  }
  .blog-main-image-wrapper {
    @media only screen and (min-width: 768px) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;

export default BlogWrapper;
