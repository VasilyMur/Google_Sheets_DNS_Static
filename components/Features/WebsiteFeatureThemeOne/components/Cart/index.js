import styled from 'styled-components';
import CartStyles from '../../styles/CartStyles';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import ButtonStyles from '../../styles/ButtonStyles';
import {
  totalQuantity,
  calcTotalPrice,
  currencyFormatter,
} from '../../../../../helpers';

const handleClick = () => {
  console.log('clickkk');
};

function Cart({ cards, products, removeProduct }) {
  const quantity = totalQuantity(Object.values(products));

  return (
    <CartStyles data-testid="cart">
      <header>
        <Supreme>Your cart</Supreme>
        <p>You Have {quantity} items in your cart.</p>
      </header>

      <ul>
        {Object.keys(products).map((cartItem) => (
          <CartItem
            key={cards[cartItem].id}
            cartItem={cards[cartItem]}
            quantity={products[cartItem]}
            removeProduct={removeProduct}
          />
        ))}
      </ul>
      {Object.keys(products).length > 0 && (
        <footer>
          <p>{currencyFormatter(calcTotalPrice(products, cards))}</p>
          <CheckoutForm
            amount={currencyFormatter(calcTotalPrice(products, cards))}
          />
        </footer>
      )}
      <ButtonStyles onClick={handleClick}>buy</ButtonStyles>
    </CartStyles>
  );
}

export default Cart;

const Supreme = styled.h3`
  background: #f94f0d;
  color: white;
  display: inline-block;
  padding: 4px 5px;
  transform: skew(-3deg);
  margin: 0;
  font-size: 4rem;
`;
