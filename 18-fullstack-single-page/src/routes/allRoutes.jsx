import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../components/home/home";
import About from "../components/about/about";
import Users from "../components/users/users";
import Add from "../components/users/addUser";
import { Signup } from "../components/users/Signup";

export default function allRoutes() {
  return (
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route path="/addUser" element={<Add />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}
