import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getData } from "./actions/action";
import React from "react";
import axios from "axios";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import "antd/dist/antd.css";

function App() {
  const dispatch = useDispatch();
  const uniData = useSelector((store) => store.universty);
  const [driver, setDriver] = useState([]);

  const searchUni = () => {};
  useEffect(() => {
    axios.get("http://ergast.com/api/f1/drivers.json").then((res) => {
      setDriver(res.data.MRData.DriverTable.Drivers);
    });
  }, []);
  console.log("driver", driver);

  const driverList = [];

  driver.forEach((item, i) => {
    item.key = i;
    driverList.push(item);
  });

  console.log("driverList", driverList);

  const handleDelete = (key) => {
    const newData = driverList.filter((item) => item.key !== key);
    setDriver(newData);
  };

  const columns = [
    {
      title: " Driver Name",
      dataIndex: "familyName",
      render: (text) => <a>{text}</a>,
      key: "familyName",
    },
    {
      title: "Permanent Number",
      dataIndex: "permanentNumber",
      key: "permanentNumber",
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "DOB",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    {
      title: "Information",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        driverList.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  return (
    <div className="App">
      Drivers
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
          uniData.data.MRData.DriverTable.Drivers.map((data, i) => {
            return <li key={i}>{data.driverId}</li>;
          })}
      </ul>
      <Table dataSource={driverList} columns={columns} />
    </div>
  );
}

export default App;
