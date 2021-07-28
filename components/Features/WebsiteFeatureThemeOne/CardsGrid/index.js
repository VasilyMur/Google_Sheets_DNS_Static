import styled from 'styled-components';
import Card from '../Card';
import CardsGridWrap from '../components/CardsGridWrap';

const CardsGrid = ({ data, siteId, cardsheader }) => (
  <Container>
    <h2>{cardsheader || 'Your products H2 header'}</h2>
    <CardsGridWrap>
      {data &&
        data.map((res, i) => <Card data={res} key={i} siteId={siteId} />)}
    </CardsGridWrap>
  </Container>
);

const Container = styled.div`
  h2 {
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1.5px;
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

export default CardsGrid;
