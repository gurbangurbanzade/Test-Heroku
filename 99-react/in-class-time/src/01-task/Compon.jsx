import React from "react";
import { useState } from "react";

export default function Compon() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setSurname(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setAge(e.target.value)}
      />
      <button
        onClick={() => {
          let user = [
            {
              username: name,
              userSurname: surname,
              userAge: age,
            },
          ];
          setUsers([...users, user]);

          console.log(user[0].username);
          let count = 0;
          return (
            <div>
              <ul>
                {user.map((item) => {
                  console.log(item.username);
                  return <li key={count++}>{item.username}</li>;
                })}
                salam
              </ul>
            </div>
          );
        }}
      >
        Add
      </button>
    </div>
  );
}
