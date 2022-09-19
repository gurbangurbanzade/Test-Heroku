import React from "react";
import { useEffect, useState } from "react";

export default function StateExample() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("qurban");
  useEffect(() => {
    console.log("number deyisdi");
  }, [number]);
  useEffect(() => {
    console.log("name deyisdi");
  }, [name]);
  useEffect(() => {
    console.log("ikisinden biri deyisdi");
  }, [name, number]);

  return (
    <div>
      {number}
      <br />
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Change Number
      </button>
      <button
        onClick={() => {
          setName(name + "x");
        }}
      >
        Change Name
      </button>
      <br />
      {name}
    </div>
  );
}
