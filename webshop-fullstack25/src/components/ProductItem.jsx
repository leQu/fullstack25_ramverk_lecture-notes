import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useCart from "../hooks/useCart.js";
import MainNavigation from "./MainNavigation.jsx";

export default function ProductItem() {
  const { productId } = useParams();
  const { cart, addToCart, clearCart } = useCart();

  useEffect(() => {
    console.log("Nya cart:", cart);
  }, [cart]);

  const [currentProduct, setCurrentProduct] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log("Fetched products:", data.products);
        const product = data.products.find(
          (p) => parseInt(p.id) === parseInt(productId),
        );
        console.log(data.products[0], productId);
        setCurrentProduct(product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [productId]);

  return (
    <div>
      <MainNavigation />
      <h1>Product Item</h1>
      <p>Product Name: {currentProduct?.title}</p>
      <p>Product Description: {currentProduct?.description}</p>
      <button onClick={() => addToCart(currentProduct)}>Add to Cart</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
