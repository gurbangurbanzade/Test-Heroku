import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AllRoutes from "./routes/allRoutes";

function App() {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>

      <Link to="/Signup">Add</Link>

      <AllRoutes />
    </>
  );
}

export default App;
