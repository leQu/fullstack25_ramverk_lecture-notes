import { NavLink } from "react-router-dom";
import useCart from "../hooks/useCart.js";

export default function MainNavigation() {
  const { cart } = useCart();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <span>Cart Items: {cart.length}</span>
    </nav>
  );
}
