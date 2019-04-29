import React, { useState, createContext } from 'react';

export const CartContext = createContext([]);
export const CartConsumer = CartContext.Consumer;

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = id => {
    setCart(prevCart => [...prevCart, id]);
  };

  const removeFromCart = id => {
    setCart(prevCart => prevCart.filter(itemId => itemId !== id));
  };

  const context = { cart, addToCart, removeFromCart, cartCount: cart.length };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}
