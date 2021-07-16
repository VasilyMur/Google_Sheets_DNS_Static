import styled from 'styled-components';
import Card from '../Card';

const CardsGrid = ({ data }) => (
  <Container>
    <Wrap>{data && data.map((res, i) => <Card data={res} key={i} />)}</Wrap>
  </Container>
);

const Container = styled.div`
  margin: 20px 0;
`;
const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  margin: 0 auto;
`;

export default CardsGrid;
