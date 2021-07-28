import styled from 'styled-components';

const CheckoutForm = ({ amount }) => (
  <FormStylesCheckout>
    <input type="text" name="amount" disabled value={amount} />
    <input type="email" name="email" required placeholder="Email" />
    <input type="text" name="address" required placeholder="Address" />
    <input type="text" name="phone" required placeholder="Phone" />
  </FormStylesCheckout>
);

export default CheckoutForm;

const FormStylesCheckout = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  input:disabled {
    background: #e3e3e3;
  }
`;
