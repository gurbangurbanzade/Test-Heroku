import React from "react";
import { Route, Routes } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import AddList from "./AddList";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
export default function Routing() {
  return (
    <div>
      Navbar
      <br />
      <br />
      <nav>
        <ul>
          <li>
            <Link to="/">ProductList</Link>
          </li>
          <li>
            <Link to="/AddList">AddList</Link>
          </li>
          {/* <li>
            <Link to="/ProductDetail">ProductDetail</Link>
          </li> */}
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/AddList" element={<AddList />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
