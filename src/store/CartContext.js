import React, { createContext, useEffect, useReducer, useState } from "react";

export const CartContext = createContext();

const cartCountReducer = (state, action) => {
    switch (action.type) {
      case "add":
        const doIhaveMeal = state.find((item) => item.id === action.meal.id);
        if (doIhaveMeal) {
          return state.map((meal) =>
            meal.id === action.meal.id
              ? { ...meal, quantity: meal.quantity + 1 }
              : meal
          );
        } else {
          return [...state, { ...action.meal, quantity: 1 }];
        }
      default:
        return state;
    }
  };

const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartCountReducer, []);

    const addToCart = (meal) => {
        dispatch({ type: "add", meal });
      };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const cartCount = cart.reduce((sum, next) => sum + next.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
