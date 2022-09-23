import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Table } from "antd";
export default function AndProject() {
  const [source, setSource] = useState([]);
  const [column, setColumn] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      //   setSource(res.data);

      res.data.forEach((element) => {
        setSource(res.data);
      });
    });
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div>
      AndProject
      <Table dataSource={source} columns={columns} />;
    </div>
  );
}
