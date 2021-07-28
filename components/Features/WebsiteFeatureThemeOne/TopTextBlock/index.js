import styled from 'styled-components';

const TopTextBlock = ({ data }) => (
  <Container>
    <Wrap>
      <p>{data}</p>
    </Wrap>
  </Container>
);

export default TopTextBlock;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto 60px;
`;

const Wrap = styled.div`
  max-width: 800px;
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  line-height: 36px;
  text-align: center;
  color: #666;
  padding: 20px;
  p {
    margin: 0;
  }
`;
