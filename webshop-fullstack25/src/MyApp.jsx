import { BrowserRouter, Routes, Route } from "react-router-dom";

import StandardLayout from "./StandardLayout.jsx";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import ProductItem from "./components/ProductItem.jsx";

export default function MyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <StandardLayout>
              <Home />
            </StandardLayout>
          }
        />
        <Route path="/blog">
          <Route index element={<h1>Blog Home</h1>} />
          <Route path=":postId" element={<h1>Blog Post</h1>} />
        </Route>
        <Route
          path="/about"
          element={
            <StandardLayout>
              <About />
            </StandardLayout>
          }
        />
        <Route
          path="/item/:productId"
          element={
            <StandardLayout>
              <ProductItem />
            </StandardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
