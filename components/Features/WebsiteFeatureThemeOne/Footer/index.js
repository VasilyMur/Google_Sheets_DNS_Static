import Link from 'next/link';
import styled from 'styled-components';
import SignupForm from '../components/SignupForm';

const Footer = ({ data, siteId, pages }) => {
  const { email, phone, title } = data;
  return (
    <Container>
      <Wrap>
        <Top>
          <Row>
            <div className="left">
              <div className="main first">
                <h3>Contact us</h3>
                <div className="linksColumn">
                  <p>
                    <strong>Email: </strong>
                    {email || 'info@youtwebsite.com'}
                  </p>

                  {phone && (
                    <p>
                      <strong>Phone: </strong> {phone}
                    </p>
                  )}
                </div>
              </div>
              {!!pages.length && (
                <div className="main">
                  <h3>More Info</h3>
                  <div className="linksColumn">
                    {pages.map((res, i) => (
                      <Link key={i} href={`/${res.url}`}>
                        <a>{res.title}</a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="main">
              <h3>Subscribe to our newsletter</h3>
              <div className="linksColumn">
                <SignupForm />
              </div>
            </div>
          </Row>
        </Top>
        <Bottom>
          <p>
            {title || 'Your Website Title'} copyright ©{' '}
            {new Date().getFullYear()}
          </p>
        </Bottom>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 60px;
  background: #f0f1f2;
  box-shadow: rgba(0, 0, 0, 0.21) 0px 0px 10px;
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
  border-top: 1px solid #d8d8d8;
  padding: 20px 0;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .left {
    display: flex;
    align-items: center;
  }
  .main {
    margin-right: 40px;
    max-width: 475px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90px;
    .linksColumn {
      display: flex;
      flex-direction: column;
      font-weight: 300;
      font-size: 1.4rem;
      p {
        margin: 0;
      }
    }
    h3 {
      font-size: 20px;
      margin: 0;
    }
  }
  @media (max-width: 900px) {
    display: block;
    .left {
      @media (max-width: 900px) {
        display: block;
      }
    }
    .main {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }
`;
