import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

export default function SupplierList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/suppliers").then((res) =>
      setData(res.data)
    );
  }, [data]);

  const deleteData = (e) => {
    e.preventDefault();
    console.log(e.target.className);
    axios.delete(
      `https://northwind.vercel.app/api/suppliers/` + e.target.className
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <Link>
              <td>id</td>
            </Link>
            <Link>
              <td>companyName</td>
            </Link>{" "}
            <Link>
              <td>contactName</td>
            </Link>{" "}
            <Link>
              <td>city</td>
            </Link>{" "}
            <Link>
              <td>country</td>
            </Link>
            {/* <td>companyName</td>
            <td>contactName</td>
            <td>city</td>
            <td>country</td> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              // <Link to="/SupplierDetail">SupplierDetail</Link>

              <tr key={item.id}>
                <Link to={`/SupplierDetail/${item.id}`}>
                  <td>{item.id}</td>
                </Link>
                <Link>
                  <td>{item.companyName}</td>
                </Link>
                <Link>
                  <td>{item.contactName}</td>
                </Link>
                <Link>
                  <td>{item.address.city}</td>
                </Link>
                <Link>
                  <td>{item.address.country}</td>
                </Link>
                <button className={item.id} onClick={deleteData}>
                  Delete
                </button>

                {/* <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.address.city}</td>
                <td>{item.address.country}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
