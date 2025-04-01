import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0)
  

  const addToCart = (meal) => {
    setCart((prev) => [...prev, meal]);
    setCartCount((prev) => prev + 1)
  };

  useEffect(() => {
    console.log(cart)
  }, [cart])

    
  


  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;