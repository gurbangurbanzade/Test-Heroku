import React from "react";
import { Route, Routes } from "react-router";
import { Link, useNavigate } from "react-router-dom";

import HomePage from "./Routes/HomePage";
import SupplierList from "./Routes/SupplierList";
import AddSupplier from "./Routes/AddSupplier";
import SupplierDetail from "./Routes/SupplierDetail";
import Error from "./Routes/Error";

export default function Routing() {
  const navigate = useNavigate();
  return (
    <div>
      Navbar
      <br />
      <button onClick={() => navigate(-1)}>Geri</button>
      <button onClick={() => navigate(1)}>Ireli</button>
      <br />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AddSupplier">AddSupplier</Link>
          </li>
          <li>
            <Link to="/SupplierList">SupplierList</Link>
          </li>
          {/* <li>
            <Link to="/SupplierDetail/id:">SupplierDetail</Link>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SupplierList" element={<SupplierList />} />
        <Route path="/AddSupplier" element={<AddSupplier />} />
        <Route path="/SupplierDetail/:id" element={<SupplierDetail />} />
        {/* <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/about" element={<AboutPage />} /> */}

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}
