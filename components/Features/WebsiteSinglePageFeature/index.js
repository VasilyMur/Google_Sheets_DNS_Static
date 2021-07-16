import styled from 'styled-components';

const WebsiteSinglePageFeature = ({ data }) => {
  const { title, description, image } = data;
  return (
    <Container>
      <Wrap>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <img src={image} alt={title} />
        </div>
      </Wrap>
    </Container>
  );
};

export default WebsiteSinglePageFeature;

const Container = styled.div``;
const Wrap = styled.div``;
