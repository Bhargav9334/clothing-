import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter(item => item.id !== id));
  const removeFromWishlist = (id) => setWishlist((prev) => prev.filter(item => item.id !== id));

  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, removeFromCart, removeFromWishlist }}>
      {children}
    </CartContext.Provider>
  );
};