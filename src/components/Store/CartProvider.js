import React from 'react';
import CartContext from '../Store/cart-context';

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    // Add item logic
  };

  const removeItemFromCartHandler = (id) => {
    // Remove item logic
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
