import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector, useStore } from "react-redux";
// import { getData } from "./actions/action";
import React from "react";
import { searchUniAction } from "./actions/action";

function App() {
  const dispatch = useDispatch();
  const uniData = useSelector((store) => store.universtyReducer);
  // const [uniName, setUniName] = useState("=");

  const searchUni = () => {
    dispatch(searchUniAction(uniData.state));
  };
  console.log(uniData);
  return (
    <div className="App">
      Universty
      <br />
      <input
        type="text"
        onChange={(e) => {
          // setUniName("=" + e.target.value);
          dispatch({ type: "INPUT_VALUE", payload: e.target.value });
        }}
      />
      <button onClick={searchUni}>Search</button>
      {uniData.loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {uniData.data?.map((data, i) => {
            return <li key={i}>{data.name}</li>;
          })}
        </ul>
      )}
      {uniData.error && <h1>Tapilmadi</h1>}
    </div>
  );
}

export default App;
