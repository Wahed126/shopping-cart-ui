import { createContext, useContext, useState } from "react";

// ### Creating the context
const CartContext = createContext();

// ### Creating the context provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}
// Custom Hook for using the cart context.
export function useCart() {
  return useContext(CartContext);
}
