import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log("Products:", data);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <NavLink to={`/item/${product.id}`}>View Details</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
