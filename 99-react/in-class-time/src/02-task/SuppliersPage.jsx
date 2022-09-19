import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SuppliersPage = () => {
  const [name, setName] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://northwind.vercel.app/api/suppliers");
    const data = await response.json();
    // console.log(json[0]);
    data.forEach((item) => {
      console.log(item);
      setName(item);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table>
      {name.map((item) => {
        return <tr>{item}</tr>;
      })}
    </table>
  );
};

export default SuppliersPage;
