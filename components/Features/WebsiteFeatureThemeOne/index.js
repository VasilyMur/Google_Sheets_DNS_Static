import React from 'react';
import styled from 'styled-components';
import CardsGrid from './CardsGrid';
import TopTextBlock from './TopTextBlock';
import Layout from './components/Layout';
import HeroBlock from './components/HeroBlock';
import SEO from './seo';
import { useWebsiteData } from './hooks';

const WebsiteFeatureThemeOne = ({ products, data }) => {
  const {
    header,
    footer,
    cards,
    pages,
    hero,
    textmain,
    frontseo,
    cardsheader,
    domain,
    _id,
  } = useWebsiteData(data);

  const { title, description, canonical } = frontseo;
  return (
    <Container>
      <Layout
        siteId={_id}
        cards={cards}
        header={header}
        footer={footer}
        products={products}
        pages={pages}
      >
        <SEO
          title={title}
          description={description}
          siteDomain={domain}
          canonical=""
        />
        <HeroBlock data={hero} />
        {textmain && <TopTextBlock data={textmain} />}
        <Wrap>
          {!!cards.length && (
            <CardsGrid data={cards} siteId={_id} cardsheader={cardsheader} />
          )}
        </Wrap>
      </Layout>
    </Container>
  );
};

const Container = styled.div``;
const Wrap = styled.div`
  max-width: 1200px;
  margin: 40px auto;
`;

export default WebsiteFeatureThemeOne;
