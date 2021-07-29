import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Cart from '../components/Cart';
import SEO from '../seo';
import { useWebsiteData } from '../hooks';
import { URL_PAGE_CART } from '../../../../constants';

const WebsiteCartFeature = ({
  data,
  cardsMappedByIds,
  addProduct,
  removeProduct,
  products,
}) => {
  const { header, footer, pages, domain, cards, _id } = useWebsiteData(data);

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
        title="Shopping cart page"
        description="Shopping cart page - complete your purchase"
        siteDomain={domain}
        canonical={URL_PAGE_CART}
      />
      <Wrap>
        {cardsMappedByIds && Object.keys(cardsMappedByIds).length && (
          <Cart
            cards={cardsMappedByIds}
            products={products}
            removeProduct={removeProduct}
          />
        )}
      </Wrap>
    </Layout>
  );
};

export default WebsiteCartFeature;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  min-height: 50vh;
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
  }
`;
