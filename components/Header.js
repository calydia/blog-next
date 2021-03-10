import Link from 'next/link';
import styled from 'styled-components';
import ActiveLink from './ActiveLink'

const Header = () => {

  const HeaderStyles = styled.header`
    background: ${({ theme }) => theme.headerGradient};
    padding: 2em 0;
    position: relative;
    text-align: center;
  `;

  const LogoLink = styled.a`
    color: ${({ theme }) => theme.mainLink};
    display: inline-block;
    position: relative;
    text-align: center;
    text-shadow: ${({ theme }) => theme.headerTextShadow};
    z-index: 2;
    &:hover {
      color: ${({ theme }) => theme.linkColor};
      cursor: pointer;
      outline: 1px solid ${({ theme }) => theme.linkColor};
      outline-offset: 15px;
      text-decoration: none;
    }
    &:focus {
      color: ${({ theme }) => theme.mainLink};
      outline: 5px dashed ${({ theme }) => theme.linkColor};
      outline-offset: 15px;
    }

    .blog-me {
      display: block;
      font-family: 'Rock Salt', cursive;
      font-size: 1.875rem;
      line-height: 1;
    }
    .blog-name {
      display: block;
      font-family: 'Rock Salt', cursive;
      font-size: 1.125rem;
      line-height: 1;
      margin-top: 0.5em;
    }
  `;

  const NavigationStyles = styled.nav`
    ul {
      display: flex;
      flex-flow: row wrap;
      list-style: none;
      justify-content: center;
      margin-bottom: 0;
      margin-top: 2em;
      padding: 0;
      position: relative;
      z-index: 2;
    }
    li {
      margin: 0.8em;
    }
    a {
      color: ${({ theme }) => theme.mainLink};
      font-size: 1.3rem;
      padding: 0.2em;
      text-shadow: ${({ theme }) => theme.headerTextShadow};
    }
    a.active {
      color: ${({ theme }) => theme.linkColor};
      text-decoration: underline;
    }
    a:hover {
      color: ${({ theme }) => theme.linkColor};
      text-decoration: underline;
    }
    a:focus {
      color: ${({ theme }) => theme.mainLink};
      outline: 5px dashed ${({ theme }) => theme.linkColor};
      outline-offset: 5px;
      text-decoration: underline;
    }
  `;

  return (
    <HeaderStyles>
      <Link className="home-main" href="/" passHref>
        <LogoLink>
          <span className="blog-me">Sanna Mäkinen</span>
          <span className="blog-name">Blog</span>
        </LogoLink>
      </Link>
      <NavigationStyles aria-label="main-navigation">
        <ul>
          <li>
            <ActiveLink activeClassName="active" href="/cats">
              <a>Cats</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/life">
              <a>Life</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/games">
              <a>Games</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/tech">
              <a>Tech</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/a11y">
              <a>Accessibility</a>
            </ActiveLink>
          </li>
        </ul>
      </NavigationStyles>
    </HeaderStyles>
  );
}

export default Header;