import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AllRoutes from "./routes/allRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
      <Link to="/addUser">Add</Link>
      <Link to="/deleteUser">Delete</Link>
      <Link to="/editUser">Edit</Link>
      <Link to="/Signup">Sign</Link>

      <AllRoutes />
    </>
  );
}

export default App;
