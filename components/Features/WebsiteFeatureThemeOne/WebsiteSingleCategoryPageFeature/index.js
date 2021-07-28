import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import CardsGridWrap from '../components/CardsGridWrap';
import Layout from '../components/Layout';
import HeroBlock from '../components/HeroBlock';
import SEO from '../seo';
import { useWebsiteData } from '../hooks';

const WebsiteSingleCategoryPageFeature = ({
  data,
  dataCategory,
  currentCategory,
  products,
}) => {
  const { header, footer, pages, domain, cards, _id } = useWebsiteData(data);
  const { details } = currentCategory;
  const { title, seotitle, seodescription } = details;

  return (
    <Layout
      siteId={_id}
      cards={cards}
      header={header}
      footer={footer}
      products={products}
      pages={pages}
    >
      <SEO
        title={seotitle}
        description={seodescription}
        siteDomain={domain}
        canonical={`category/${title && title.toLowerCase()}`}
      />
      <Wrap>
        <HeroBlock
          data={{
            title: details.header,
            subtitle: details.description,
            image: details.image,
          }}
          pageType="category"
        />

        {dataCategory && dataCategory.length && (
          <CardsGridWrap>
            {dataCategory.map((res, i) => (
              <Card data={res} key={i} siteId={_id} />
            ))}
          </CardsGridWrap>
        )}
      </Wrap>
    </Layout>
  );
};
export default WebsiteSingleCategoryPageFeature;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0 40px;
  h1 {
    text-align: left;
  }
  p {
    text-align: left;
    margin: 0;
  }
`;
