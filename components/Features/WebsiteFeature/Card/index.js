import styled from 'styled-components';
import { currencyFormatter } from '../../../../helpers';

const Card = ({ data }) => {
  const {
    title,
    price,
    image,
    tag,
    link,
    comment,
    button,
    filter,
    description,
    id,
  } = data;

  return (
    <Container>
      <Wrap>
        <div className="product_base">
          {/* <a className="product_button" href={link}>
            {button}
          </a> 
          <div>{description}</div> */}
          <a href={link} target="_blank" rel="noreferrer">
            <img src={image} alt={title} />
          </a>

          <h6>
            <a href={link}>{title}</a>
          </h6>
          <h5>{currencyFormatter(price)}</h5>
        </div>
        <div className="product_extra">
          <div>
            <strong>Rating:</strong> {tag}
          </div>
          {comment && (
            <div>
              <strong>In stock:</strong> {comment}
            </div>
          )}
          <div className="product_filters">
            {filter.map((res, i) => (
              <span key={i}>{res}</span>
            ))}
          </div>
        </div>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 15px;
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
    margin: 0 0 5px;
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
  }
  .product_filters {
    span {
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
