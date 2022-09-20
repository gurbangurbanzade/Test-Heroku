import React from "react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { ContextData } from "./ContextData";
import { Link, useNavigate } from "react-router-dom";

export default function ProductList() {
  const { data, setData } = useContext(ContextData);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  const addChartProd = (e) => {
    e.preventDefault();
    // console.log(e.target.className);
    // console.log(products);
    products.forEach((prod) => {
      if (prod.id == e.target.className) {
        // console.log(prod);
        setData([...data, prod]);
      }
    });
  };

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>unitPrice</th>
            <th>unitsInStock</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <button>
                    <Link to={{ pathname: "/ProductDetail" }}>
                      ProductDetail
                    </Link>
                  </button>
                </td>
                <td>
                  <button className={product.id} onClick={addChartProd}>
                    Add To Chart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
