import React from "react";
import { useContext, useState } from "react";
import { ContextData } from "./ContextData";

export default function AddList() {
  const { data, setData } = useContext(ContextData);
  const [inputValue, SetInputValue] = useState("");

  const addData = (e) => {
    e.preventDefault();
    setData([...data, inputValue]);
  };

  return (
    <div>
      <input type="text" onChange={(e) => SetInputValue(e.target.value)} />
      <button onClick={addData}>Add</button>
    </div>
  );
}
