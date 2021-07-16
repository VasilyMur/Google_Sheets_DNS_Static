import Link from 'next/link';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = (props) => (
  <StyledHeader>
    <div className="bar">
      <Wrap>
        <Logo>
          <Link href="/">
            <StyledLink>Test</StyledLink>
          </Link>
        </Logo>
        <Nav />
      </Wrap>
    </div>
  </StyledHeader>
);

export default Header;

const Logo = styled.h1`
  font-size: 28px;
  margin: 1rem 0 1rem 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

const StyledLink = styled.a`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.red};
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 1300px) {
    margin: 0 0 0 1rem;
    text-align: center;
  }
`;
const Wrap = styled.div`
  max-width: ${(props) => props.theme.maxWidthHeaderFooter};
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: stretch;
`;
const StyledHeader = styled.header`
  margin-bottom: 0;
  .bar {
    position: relative;
    border-bottom: 10px solid ${(props) => props.theme.blackParagraph};
  }
`;
