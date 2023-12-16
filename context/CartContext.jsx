"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const number = 69;
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (name, price) => {
    setCartItem((prev) => [
      ...prev,
      {
        name,
        price,
      },
    ]);
  };

  const contextValue = { number, cartItem, addToCart };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};