import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../seo';
import { useWebsiteData } from '../hooks';

const WebsiteStaticPageFeature = ({ data, dataPage, products }) => {
  const { header, footer, cards, pages, domain, _id } = useWebsiteData(data);
  const { url, title, paragraphone, paragraphtwo, seotitle, seodescription } =
    dataPage;

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
        canonical={url}
      />
      <Wrap>
        <h1>{title}</h1>
        <p>{paragraphone}</p>
        <p>{paragraphtwo}</p>
      </Wrap>
    </Layout>
  );
};

export default WebsiteStaticPageFeature;

const Wrap = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  min-height: 50vh;
  p {
    letter-spacing: 0.5px;
    line-height: 2;
    font-size: 18px;
  }
  h1 {
    text-transform: uppercase;
  }
`;
