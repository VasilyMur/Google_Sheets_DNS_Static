import React from 'react';
import styled from 'styled-components';

function RemoveFromCart({ removeProduct, id }) {
  console.log('test');
  return (
    <BigButton
      onClick={() => {
        removeProduct(id);
      }}
      title="Remove Item From Cart"
    >
      &times;
    </BigButton>
  );
}

export default RemoveFromCart;
const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${(props) => props.theme.red};
    cursor: pointer;
  }
`;
