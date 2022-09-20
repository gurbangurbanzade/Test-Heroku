import React from "react";
import { useContext, useState } from "react";
import { ContextData } from "./ContextData";
export default function List() {
  const { data, setData } = useContext(ContextData);

  return (
    <div>
      <ul>
        {data.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
