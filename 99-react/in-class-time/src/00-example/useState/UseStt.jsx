import React from "react";
import { useState } from "react";

const UseStt = () => {
  const [name, setName] = useState("qurban");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["kenan", "qurban"]);
  const [adress, setAdress] = useState({ city: "baku", zip: 10 });

  return (
    <div>
      <h1>Salam {name}</h1>
      <h2>Age {age}</h2>
      <button onClick={() => setName("Kenan")}>Click Name</button>
      <button onClick={() => setAge(19)}>Click Age</button>
      <hr />

      <button onClick={() => setFriends([...friends, "eli"])}>
        Add Friend
      </button>

      {friends.map((friend, i) => {
        return <div key={i}>{friend}</div>;
      })}

      <hr />
      <h1>
        {adress.city}-{adress.zip}
      </h1>

      <button onClick={() => setAdress({ city: "beylagan", zip: 11 })}>
        Change Adress
      </button>
    </div>
  );
};

export default UseStt;
