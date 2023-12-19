"use client";

import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

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

export function useCartContext() {
  const context = useContext(CartContext) 
  if(!context) {
    throw new Error(" error!!!")
  }
  return context
}