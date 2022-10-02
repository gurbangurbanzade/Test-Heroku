import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getData } from "./actions/action";
import React from "react";

function App() {
  const dispatch = useDispatch();
  const uniData = useSelector((store) => store.universty);
  const [uniName, setUniName] = useState("=");

  const searchUni = () => {
    console.log("salam");
    console.log(uniName);
    dispatch(getData(uniName));
  };
  return (
    <div className="App">
      salam
      <br />
      <input
        type="text"
        onChange={(e) => {
          setUniName("=" + e.target.value);
        }}
      />
      <button onClick={searchUni}>Search</button>
      <ul>
        {uniData.status === "success" &&
          uniData.data.map((data, i) => {
            return <li key={i}>{data.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
