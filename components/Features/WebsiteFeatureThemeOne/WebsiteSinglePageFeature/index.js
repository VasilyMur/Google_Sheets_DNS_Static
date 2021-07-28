import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ButtonStyles from '../styles/ButtonStyles';
import Card from '../Card';
import SEO from '../seo';
import { currencyFormatter } from '../helpers';
import { useWebsiteData } from '../hooks';

const WebsiteSinglePageFeature = ({
  data,
  dataProduct,
  products,
  addProduct,
  removeProduct,
}) => {
  const { header, footer, cards, pages, domain, _id } = useWebsiteData(data);
  const { title, description, image, price, comment, category, link } =
    dataProduct;

  const currentCategories = category && category.map((res) => res.title);
  const similar = cards
    .filter((res) => res.title !== title)
    .filter((response) =>
      response.category.some((resp) => currentCategories.includes(resp.title))
    )
    .slice(0, 4);

  const handleClick = () => {
    addProduct(dataProduct.id);
  };
  const handleRemoveClick = () => {
    removeProduct(dataProduct.id);
  };

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
        title={title}
        description={description}
        siteDomain={domain}
        canonical={`items/${link}`}
      />
      <Wrap>
        <ProductWrap>
          {image && (
            <ImageWrap>
              <img src={image} alt={title || ''} />
            </ImageWrap>
          )}

          <DetailsWrap>
            {title && <h1>{title}</h1>}

            {price && (
              <p>
                <strong>{currencyFormatter(price)}</strong> |{' '}
                <span className="details_wrap_comment">{comment}</span>
              </p>
            )}

            {description && (
              <div className="details_wrap_description">{description}</div>
            )}

            {dataProduct.id && (
              <>
                <ButtonStyles onClick={handleClick}>Add to cart</ButtonStyles>

                <ButtonStyles onClick={handleRemoveClick}>Remove</ButtonStyles>
              </>
            )}
          </DetailsWrap>
        </ProductWrap>

        {similar && similar.length && (
          <>
            <h3>You may also like</h3>
            <GridWrap>
              {similar.map((res, i) => (
                <Card data={res} key={i} siteId={_id} />
              ))}
            </GridWrap>
          </>
        )}
      </Wrap>
    </Layout>
  );
};

export default WebsiteSinglePageFeature;

const ProductWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  h1 {
    text-align: left;
  }
  p {
    text-align: left;
  }
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  h3 {
    text-transform: uppercase;
    font-weight: 400;
    padding: 0 20px;
  }
`;

const ImageWrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const DetailsWrap = styled.div`
  margin-left: 10px;
  .details_wrap_description {
    max-width: 400px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  .details_wrap_comment {
    color: #666;
  }
`;

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  margin: 0 auto;
  max-width: 1200px;
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
