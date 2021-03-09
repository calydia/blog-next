import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from "../themeConfig";
import useDarkMode from "use-dark-mode";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {

  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true)
  }, [])
  
    
  const ToggleButton = styled.button`
    background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 51%, #00d2ff 100%);
    border: none;
    color: white; 
    padding: 1em 1.5em;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: 5px dashed ${({ theme }) => theme.linkColor};
      outline-offset: 5px;
    }
  `;

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Link href="#skip-target">
        <a id="skip" className="skip-link">
          Skip to content
        </a>
      </Link>
        <ToggleButton onClick={darkmode.toggle}>Switch color mode</ToggleButton>
        <Header />
          {isMounted && <Component {...pageProps} />}
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
