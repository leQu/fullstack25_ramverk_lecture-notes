import { useContext } from "react";
import CartContext from "../context/CartContext.js";

function useCart() {
  const { cart, addToCart, clearCart } = useContext(CartContext);
  return { cart, addToCart, clearCart };
}
export default useCart;
