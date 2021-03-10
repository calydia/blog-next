import styled from 'styled-components';

const BlogWriterContent = styled.aside`
  color: ${({ theme }) => theme.postText};
  margin-top: 145px;
  width: 100%;
  @media only screen and (min-width: 1000px) {
    width: 280px;
  }
  .writer-image-wrapper {
    height: 150px;
    margin-bottom: 25px;
    margin-top: -105px;
    width: 150px;
  }
  .info-content {
    @include fontSize(18px);
    background: ${({ theme }) => theme.writerBg};
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 2em;
    text-align: center;
  }
  p {
    font-size: 1.2rem;
  }
  .name {
    font-family: 'Rock Salt', cursive;
    font-size: 1.2rem;
    font-weight: normal;
    text-align: center;
    width: 100%;
    @media only screen and (min-width: 1000px) {
      width: auto;
    }
  }
`;

export default BlogWriterContent;