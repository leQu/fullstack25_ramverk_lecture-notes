import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductItem() {
  const { productId } = useParams();

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

  const product = products.find((p) => p.id === parseInt(productId));

  return (
    <div>
      <h1>Product Item</h1>
      <p>Product Name: {product?.title}</p>
    </div>
  );
}
