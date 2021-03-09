import Link from 'next/link';

const Header = () => {

  return (
    <header>
      <Link href="#skip-target">
        <a id="skip" className="skip-link">
          Skip to content
        </a>
      </Link>
      <Link className="home-main" href="/">
        <a>
          <span className="name">Sanna Mäkinen</span>
          <span className="blog">Blog</span>
        </a>
      </Link>
      <nav aria-label="main-navigation">
        <ul>
          <li>
            <Link href="/cats">
              <a>Cats</a>
            </Link>
          </li>
          <li>
            <Link href="/life">
              <a>Life</a>
            </Link>
          </li>
          <li>
            <Link href="/games">
              <a>Games</a>
            </Link>
          </li>
          <li>
            <Link href="/tech">
              <a>Tech</a>
            </Link>
          </li>
          <li>
            <Link href="/a11y">
              <a>Accessibility</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;