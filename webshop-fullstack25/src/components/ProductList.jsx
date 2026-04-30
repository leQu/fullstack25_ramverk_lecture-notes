import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductList() {
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
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title}
          <Link to={`/item/${product.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  );
}
