import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AddSupplier() {
  // let obj = {
  //   id: 4,
  //   companyName: "Tokyo Traders",
  //   contactName: "Yoshi Nagase",
  //   contactTitle: "Marketing Manager",
  //   address: {
  //     street: "9-8 Sekimai Musashino-shi",
  //     city: "Tokyo",
  //     region: "NULL",
  //     postalCode: 100,
  //     country: "Japan",
  //     phone: "(03) 3555-5011",
  //   },
  // };

  const [postData, setPostData] = useState({
    id: "",
    companyName: "",
    contactName: "",
    contactTitle: "",
    address: {
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
      phone: "",
    },
  });
  const postDataView = (e) => {
    e.preventDefault();
    const info = postData;

    axios.post("https://northwind.vercel.app/api/suppliers", info);
  };
  const getData = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      // console.log(res.data.length);
      setPostData({ ...postData, id: +res.data.length + 1 });
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <label htmlFor="">companyName</label>
      <input name="companyName" onChange={getData} type="text" />
      <br />
      <label htmlFor="">contactName</label>
      <input name="contactName" onChange={getData} type="text" />
      <br />
      <label htmlFor="">contactTitle</label>
      <input name="contactTitle" onChange={getData} type="text" />
      <br />
      <label htmlFor="">street</label>
      <input name="address.['street']" onChange={getData} type="text" />
      <br />
      <label htmlFor="">city</label>
      <input name="address.['city']" onChange={getData} type="text" />
      <br />
      <label htmlFor="">region</label>
      <input name="address.region" onChange={getData} type="text" />
      <br />
      <label htmlFor="">country</label>
      <input name="address.country" onChange={getData} type="text" />
      <br />
      <label htmlFor="">phone</label>
      <input name="address[phone]" onChange={getData} type="text" />
      <br />
      <button type="" onClick={postDataView}>
        Post
      </button>
    </div>
  );
}
