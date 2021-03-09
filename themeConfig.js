import { createGlobalStyle} from "styled-components";

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  mainLink: 'black',
  linkColor: '#54007b',
  gradient: 'linear-gradient(to right, #46037e 0%, RoyalBlue 50%, #46037e 100%)',
  listingBg: 'white'
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: 'red',
  background: '#999',
  mainLink: 'white',
  linkColor: '#ade5f8',
  gradient: 'linear-gradient(to right, #46037e 0%, RoyalBlue 50%, #46037e 100%)',
  listingBg: 'transparent'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Average Sans', sans-serif;
  }
`