import Link from 'next/link';
import styled from 'styled-components';
import { currencyFormatter } from '../helpers';
import { URL_PAGE_SINGLE_ITEM, URL_PAGE_CATEGORY } from '../../../../constants';

const Card = ({ data, siteId }) => {
  const {
    title,
    price,
    image,
    tag,
    link,
    comment,
    button,
    category,
    description,
    id,
  } = data;

  const productLink = link.includes('http')
    ? link
    : `${URL_PAGE_SINGLE_ITEM}/${link}`;

  return (
    <Container>
      <Wrap>
        <div className="product_base">
          {/* <a className="product_button" href={link}>
            {button}
          </a> 
          <div>{description}</div> */}
          <Link href={{ pathname: productLink }}>
            <a>
              <img src={image} alt={title} />
            </a>
          </Link>
          <h6>
            <Link href={{ pathname: productLink }}>
              <a>{title}</a>
            </Link>
          </h6>
        </div>
        <div className="product_extra">
          <div className="price">{currencyFormatter(price)}</div>
          <div>
            <strong>Rating:</strong> {tag}
          </div>
          {comment && (
            <div>
              <strong>In stock:</strong> {comment}
            </div>
          )}
          <div className="product_filters">
            {category.map((res, i) => (
              <Link
                key={i}
                href={{
                  pathname: `${URL_PAGE_CATEGORY}/${res.slug}`,
                }}
              >
                <a>{res.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 10px;
  margin: 0 10px 10px;
  border-bottom: 1px solid rgb(224, 224, 224);
`;
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-content: space-between;
  align-items: center;
  h6 {
    margin: 0;
    font-size: 18px;
  }
  h5 {
    margin: 0 0 10px;
  }
  .product_button {
    display: flex;
    justify-content: center;
    color: #b09759;
    text-decoration: none;
  }
  .product_extra {
    font-weight: 300;
    color: #3a3a3a;
    text-align: left;
    .price {
      font-weight: 400;
    }
  }
  .product_filters {
    line-height: 2;
    a {
      background-color: #e9ecf0;
      color: #3a3a3a;
      margin-right: 10px;
      padding: 5px;
      font-size: 14px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Card;
