import Link from 'next/link';
import styled from 'styled-components';

const Footer = () => (
  <Container>
    <Wrap>
      <Top>
        <Row>
          <div className="main first">
            <Logo>
              <Link href="/">
                <StyledLink>Test</StyledLink>
              </Link>
            </Logo>
            <p>Welcome to this newly built website!</p>
          </div>
          <div className="main">
            <h3>Info</h3>
            <div className="linksColumn">
              <Link href={{ pathname: '/' }}>
                <StyledLinkNormal>Field 1</StyledLinkNormal>
              </Link>
              <Link href={{ pathname: '/' }}>
                <StyledLinkNormal>Contacts</StyledLinkNormal>
              </Link>
            </div>
          </div>
        </Row>
      </Top>
      <Bottom>
        <p>Test site copyright © {new Date().getFullYear()}</p>
      </Bottom>
    </Wrap>
  </Container>
);

export default Footer;

const Container = styled.div`
  background: ${(props) => props.theme.blackParagraph};
  line-height: 1.6;
  color: #fff;
  p {
    font-size: 1.4rem;
  }
`;

const Wrap = styled.div`
  max-width: ${(props) => props.theme.maxWidthHeaderFooter};
  margin: 0 auto;
  padding: 0 2rem;
`;
const Top = styled.div`
  display: flex;
  padding: 60px 0;
  p {
    font-weight: 300;
  }
`;
const Bottom = styled.div`
  display: flex;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  padding: 35px 0;
  p {
    color: #94a1af;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  .first {
    margin-right: 40px;
  }
  .main {
    max-width: 350px;
    .linksColumn {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
      font-weight: 300;
      font-size: 1.4rem;
    }
    h3 {
      font-size: 20px;
      margin: 0;
    }
  }
  @media (max-width: 670px) {
    display: block;
  }
`;
const Logo = styled.div`
  font-size: 20px;
  transform: skew(-7deg);
`;
const StyledLink = styled.a`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  padding: 0.5rem 1rem;
  background: #fe2c55;
  color: white;
  text-transform: uppercase;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
`;

const StyledLinkNormal = styled.a`
  color: #fff;
  cursor: pointer;
`;
