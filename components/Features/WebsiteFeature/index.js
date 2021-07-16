import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardsGrid from './CardsGrid';
import Header from './Header';
import Footer from './Footer';

const WebsiteFeature = ({ data, host }) => {
  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    if (Object.keys(data).length) {
      setSiteData(data);
    }
  }, [data]);

  return (
    <Container>
      <Header />
      <Wrap>
        {siteData.cards && siteData.cards.length && (
          <CardsGrid data={siteData.cards} />
        )}
      </Wrap>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;
const Wrap = styled.div`
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
`;

export default WebsiteFeature;
