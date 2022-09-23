import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      <div className="productsNav">
        <Link to="/products/search"> Products </Link>
        <Link to="/products/list"> Supliers </Link>
        <Link to="/products/add"> Add </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Products;
