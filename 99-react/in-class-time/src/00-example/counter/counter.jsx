import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Artir
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Azalt
      </button>
    </div>
  );
};

export default Counter;
