import Link from 'next/link';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = ({ header }) => (
  <StyledHeader>
    <Wrap>
      {header && Object.keys(header).length && (
        <Link href="/">
          {header.image ? (
            <StyledImage>
              <img src={header.image} alt="header" />
            </StyledImage>
          ) : (
            <StyledLink>{header.title || 'Your website name'}</StyledLink>
          )}
        </Link>
      )}
    </Wrap>
  </StyledHeader>
);
export default Header;

const StyledLink = styled.a`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  font-size: 28px;
  margin: 0;
  padding: 10px;
  @media (max-width: 700px) {
    font-size: 24px;
  }
`;
const StyledImage = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Wrap = styled.div`
  max-width: ${(props) => props.theme.maxWidthHeaderFooter};
  margin: 0 auto;
`;
const StyledHeader = styled.header`
  margin-bottom: 0;
`;
