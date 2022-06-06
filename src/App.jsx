import React from "react";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import ScrollToTop from "./components/ScrollTopTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
