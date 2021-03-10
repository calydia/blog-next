import { createGlobalStyle} from "styled-components";

export const lightTheme = {
  headerGradient: 'linear-gradient(to right, #E6CAFC 0%, #BBC9F7 50%, #E6CAFC 100%)',
  headerTextShadow: 'none',
  mainLink: 'black',
  linkColor: '#54007b',
  gradient: 'linear-gradient(to right, #46037e 0%, RoyalBlue 50%, #46037e 100%)',
  listingBg: '#BBC9F7',
  footerBg: '#BBC9F7',
  footerBorder: 'black',
  footerLogo: 'url(/images/sm-logo-darkblue.png)',
  footerLink: '#033573',
  footerLinkHover: '#54007b'
}

export const darkTheme = {
  headerGradient: 'linear-gradient(to right, #35035E 0%, #18399A 50%, #35035E 100%)',
  headerTextShadow: '4px 4px 6px rgba(0, 0, 0, 0.46)',
  mainLink: 'white',
  linkColor: '#ade5f8',
  gradient: 'linear-gradient(to right, #46037e 0%, RoyalBlue 50%, #46037e 100%)',
  listingBg: '#18032B',
  footerBg: '#18032B',
  footerBorder: 'white',
  footerLogo: 'url(/images/sm-logo-lightblue.png)',
  footerLink: '#ade5f8',
  footerLinkHover: 'wheat'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Average Sans', sans-serif;
  }
`