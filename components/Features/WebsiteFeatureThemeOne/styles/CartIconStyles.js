import styled from 'styled-components';

const CartIconStyles = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  svg {
    color: ${(props) =>
      Object.keys(props.products).length ? '#f94f0d' : props.color};
    transform: ${(props) =>
      Object.keys(props.products).length ? 'scale(125%, 125%)' : 'none'};
    transition: transform 0.2s;
    font-size: 20px;
    vertical-align: middle;
  }
  span {
    font-size: 12px;
    color: #fff;
    vertical-align: top;
    margin-left: 3px;
  }
  @media (max-width: 900px) {
    padding: 0;
  }
`;

export default CartIconStyles;
