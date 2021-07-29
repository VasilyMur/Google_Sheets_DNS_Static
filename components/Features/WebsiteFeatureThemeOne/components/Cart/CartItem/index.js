import React from 'react';
import styled from 'styled-components';
import RemoveFromCart from '../RemoveFromCart';
import { currencyFormatter } from '../../../helpers';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
  @media (max-width: 600px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`;

function CartItem({ cartItem, quantity, removeProduct }) {
  return (
    <CartItemStyles>
      <img width="100" src={cartItem.image} alt={cartItem.title} />
      <div className="cart-item-details">
        <h3>{cartItem.title}</h3>
        <p>
          {currencyFormatter(cartItem.price * quantity)}
          {' - '}
          <em>
            {quantity} &times; {currencyFormatter(cartItem.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} removeProduct={removeProduct} />
    </CartItemStyles>
  );
}

export default CartItem;
