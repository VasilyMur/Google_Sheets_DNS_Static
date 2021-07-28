// import Image from 'next/image';
import styled from 'styled-components';
import ButtonStyles from '../../styles/ButtonStyles';

const HeroBlock = ({ data, pageType }) => {
  const { title, image, subtitle, button } = data;
  const starterTitleMessage = pageType
    ? 'Your category page H1 header'
    : 'Your website H1 header';

  return (
    <Container pageType={pageType}>
      <Wrap>
        <picture>
          <img src={image} alt={title} />
        </picture>
        <div className="overlay_container">
          <div className="overlay_container_wrap">
            <div className="overlay_container_wrap_item">
              <div className="overlay_container_wrap_item_top">
                <h1>{title || starterTitleMessage}</h1>
                <p>{subtitle || 'Page subtitle'}</p>
              </div>
              <div className="overlay_container_wrap_item_bottom">
                {!pageType && (
                  <ButtonStyles>{button || 'Your action button'}</ButtonStyles>
                )}
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </Container>
  );
};

export default HeroBlock;

const Container = styled.div`
  color: #fff;
  box-shadow: 0 0 0 7px rgba(0, 0, 0, 0.05);
  box-shadow: ${(props) =>
    props.pageType ? 'none' : '0 0 0 7px rgba(0, 0, 0, 0.05)'};
  margin-bottom: 60px;
`;
const Wrap = styled.div`
  padding-bottom: 36%;
  position: relative;
  height: 0px;
  overflow: hidden;
  @media (max-width: 1200px) {
    padding-bottom: 46%;
  }
  @media (max-width: 700px) {
    padding-bottom: 80%;
  }
  @media (max-width: 600px) {
    padding-bottom: 90%;
  }
  picture {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    opacity: 1;
  }
  img {
    display: block;
    width: 100%;
    object-position: 50% 20%;
    height: 100%;
    object-fit: cover;
  }
  .overlay_container {
    width: 100%;
    height: 100%;
    margin: 0px auto;
    padding: 2rem;
    position: absolute;
  }
  .overlay_container_wrap {
    max-width: 1000px;
    height: 100%;
    margin: 0px auto;
  }
  .overlay_container_wrap_item {
    position: absolute;
    bottom: 20%;
  }
  .overlay_container_wrap_item_top {
    line-height: 1.2;
    background: rgba(0, 0, 0, 0.7) none repeat scroll 0% 0%;
    padding: 20px;
    @media (max-width: 700px) {
      max-width: 95%;
    }
    h1 {
      font-size: 52px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: left;
      margin: 0;
    }
    p {
      font-size: 24px;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin: 0;
    }
    @media (max-width: 1600px) {
      h1 {
        font-size: 42px;
      }
      p {
        font-size: 22px;
      }
    }
    @media (max-width: 1200px) {
      h1 {
        font-size: 32px;
      }
      p {
        font-size: 18px;
      }
    }
    @media (max-width: 600px) {
      h1 {
        font-size: 28px;
      }
      p {
        font-size: 18px;
      }
    }
    @media (max-width: 400px) {
      h1 {
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
    }
  }
  .overlay_container_wrap_item_bottom {
  }
`;
