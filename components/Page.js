import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { URL_PAGE_NOT_FOUND } from '../constants';

const theme = {
  red: '#fe2c55',
  black: '#1b1b1b',
  blackHero: '#000',
  blackParagraph: '#1d2b35',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1200px',
  maxWidthHeaderFooter: '1400px',
  innerPadding: '3rem 2rem',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.blackHero};
`;

const Inner = styled.div`
  max-width: 100%;
  justify-content: center;
  flex-direction: column;
  height: ${(props) =>
    props.pathName !== URL_PAGE_NOT_FOUND ? 'auto' : '70vh'};
`;

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  line-height: 1.6;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.black}
}
a {
  text-decoration: none;
  color: ${theme.black};
}
h1 {
    font-size: 3rem;
    margin: 0.5rem 0 3rem;
    text-align: center;
}
h2,h3,h4,h5,h6 {
    font-size: 2.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin: 2rem 0;
}
`;

const Page = ({ pathName, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledPage>
      <Inner pathName={pathName}>{children}</Inner>
    </StyledPage>
  </ThemeProvider>
);
export default Page;
