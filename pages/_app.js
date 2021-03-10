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

import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';


function MyApp({ Component, pageProps }) {

  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true)
  }, [])
  
    
  const ToggleButtonDark = styled.button`
    background: transparent;
    border: none;
    color: black; 
    padding: 1em 1.5em;
    position: absolute;
    right: 0;
    z-index: 2;
    &:hover {
      cursor: pointer;
      outline: 1px solid ${({ theme }) => theme.linkColor};
    }
    &:focus {
      outline: 5px dashed ${({ theme }) => theme.linkColor};
      outline-offset: 5px;
    }
  `;

  const ToggleButtonLight = styled.button`
    background: transparent;
    border: none;
    color: white; 
    padding: 1em 1.5em;
    position: absolute;
    right: 0;
    z-index: 2;
    &:hover {
      cursor: pointer;
      outline: 1px solid ${({ theme }) => theme.linkColor};
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
      <ToggleButtonDark className="dark-toggle" onClick={darkmode.enable} aria-label="Switch to dark mode" title="Switch to dark mode">
        <Brightness2Icon aria-hidden="true" />
      </ToggleButtonDark>
      <ToggleButtonLight className="light-toggle" onClick={darkmode.disable} aria-label="Switch to light mode" title="Switch to light mode">
        <WbSunnyIcon aria-hidden="true" />
      </ToggleButtonLight>
        <Header />
          {isMounted && <Component {...pageProps} />}
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
