import React from "react";
import { useContext, useEffect } from "react";
import { ContextData } from "./ContextData";

export default function Cart() {
  const { data, setData } = useContext(ContextData);
  const clear = (e) => {
    e.preventDefault();
    setData([""]);
  };
  const remove = (e) => {
    e.preventDefault();
    console.log("salam");

    data.forEach((prod, index) => {
      if (prod.id == e.target.className) {
        data.splice(index, 1);
        setData([...data, data]);
      }
    });
  };

  return (
    <div>
      Cart salam
      <ul>
        {data.map((item) => {
          return (
            item.id && (
              <>
                <li
                  key={item.id}
                >{`[{productId:${item.id}; name:${item.name};   }]`}</li>
                <button className={item.id} onClick={remove}>
                  Remove Chart
                </button>
              </>
            )
          );
        })}
      </ul>
      <button onClick={clear}>Empty Chart</button>
    </div>
  );
}
