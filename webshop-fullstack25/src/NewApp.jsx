import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartProvider from "./components/CartProvider.jsx";

import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import ProductItem from "./components/ProductItem.jsx";
import ProductList from "./components/ProductList.jsx";

export default function NewApp() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<ProductList />} />
          <Route path="/item/:productId" element={<ProductItem />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
