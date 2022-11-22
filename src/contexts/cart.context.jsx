import { createContext, useState } from "react";

export const CartContext = createContext({
  displayCart: false,
  setDisplayCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [displayCart, setDisplayCart] = useState(false);

  const value = { displayCart, setDisplayCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
