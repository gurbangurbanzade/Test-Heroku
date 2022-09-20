import React from "react";
import { Route, Routes } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import List from "./List";
import AddList from "./AddList";
import Completed from "./Completed";

export default function Routing() {
  return (
    <div>
      Navbar
      <br />
      <br />
      <nav>
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/AddList">AddList</Link>
          </li>
          <li>
            <Link to="/Completed">Completed</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/AddList" element={<AddList />} />
        <Route path="/Completed" element={<Completed />} />
      </Routes>
    </div>
  );
}
