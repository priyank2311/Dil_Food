import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import Cart from "./component/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCheckOut from "./component/ProductCheckOut";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productcheckout" element={<ProductCheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
