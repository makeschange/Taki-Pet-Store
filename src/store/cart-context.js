import React from "react";

export const ConfirmContext = React.createContext({
  confirmdata: {},
  confirmHandler: (data) => {},
});

export const ShowCart = React.createContext({
  cart: false,
  showCart: () => {},
  closeCart: () => {},
});

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  addByOne: (item) => {},
  removeItem: (id) => {},
  resetItem: () => {},
});

export default CartContext;
