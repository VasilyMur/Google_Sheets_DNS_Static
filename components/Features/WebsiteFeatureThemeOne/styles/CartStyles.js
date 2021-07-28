import styled from 'styled-components';

const CartStyles = styled.div`
  padding: 20px;
  background: white;
  max-width: 600px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 0 auto;

  header {
    border-bottom: 5px solid #000;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 10px double #000;
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: auto;
  }
`;

export default CartStyles;
