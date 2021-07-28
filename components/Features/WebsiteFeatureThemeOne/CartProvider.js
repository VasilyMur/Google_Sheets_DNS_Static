import React, { useState, useEffect } from 'react';

/* First we will make a new context */
const CartContext = React.createContext();

/* Then create a provider Component */
const CartProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const prodList = localStorage.getItem('products');
    if (prodList) {
      setProducts(JSON.parse(prodList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (id) => {
    setProducts((current) => {
      if (!current[id]) {
        return { ...current, [id]: 1 };
      }
      return { ...current, [id]: current[id] + 1 };
    });
  };

  const removeProduct = (id) => {
    setProducts((current) => {
      if (current[id] <= 1) {
        const { [id]: toRemove, ...rest } = current;
        return { ...rest };
      }

      if (current[id]) {
        return { ...current, [id]: current[id] - 1 };
      }
      return { ...current };
    });
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* then make a consumer which will surface it */
const CartConsumer = CartContext.Consumer;

export default CartProvider;
export { CartConsumer };
