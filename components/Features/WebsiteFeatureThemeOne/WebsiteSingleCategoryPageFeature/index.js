import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import CardsGridWrap from '../components/CardsGridWrap';
import Layout from '../components/Layout';
import HeroBlock from '../components/HeroBlock';
import SEO from '../seo';
import { useWebsiteData } from '../hooks';
import { URL_PAGE_CATEGORY } from '../../../../constants';

const defaultCategoryData = {
  title: 'Default Title',
  header: 'Default header',
  description: 'Default description',
  image:
    'https://res.cloudinary.com/dlmeqtsfq/image/upload/v1635415813/GSHEETS_MAIN/blank_page.jpg',
  seoTitle: '',
  seoDescription: '',
  slug: 'default',
};

const WebsiteSingleCategoryPageFeature = ({
  data,
  dataCategory,
  filterData,
  currentCategory,
  products,
}) => {
  const { header, social, footer, pages, domain, cards, categories, _id } =
    useWebsiteData(data);

  const currentCategoryDetails = categories.find(
    (res) => res.slug === currentCategory.slug
  );

  let detailsData = {};
  if (currentCategoryDetails && Object.keys(currentCategoryDetails).length) {
    detailsData = currentCategoryDetails;
  } else {
    detailsData = defaultCategoryData;
  }

  const { title, seoTitle, seoDescription } = detailsData;

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
        title={seoTitle}
        description={seoDescription}
        siteDomain={domain}
        canonical={`${URL_PAGE_CATEGORY}/${title && title.toLowerCase()}`}
      />
      <Wrap>
        <HeroBlock
          data={{
            title: detailsData.header,
            subtitle: detailsData.description,
            image: detailsData.image,
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
