import React from "react";
import { useState } from "react";

const InputState = () => {
  const [form, setForm] = useState({ name: "", surname: "" });
  const getInfo = (e) => {
    console.log("salam");
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <input name="name" type="text" onChange={getInfo} />
      <br />
      <input name="surname" type="text" onChange={getInfo} />
      <br />
      {form.name}
      {form.surname}
    </div>
  );
};

export default InputState;
