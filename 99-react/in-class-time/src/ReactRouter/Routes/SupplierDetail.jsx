import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SupplierDetail() {
  const { id } = useParams();

  const [item, setItem] = useState({});
  useEffect(() => {
    axios(`https://northwind.vercel.app/api/suppliers/${id}`).then((res) => {
      setItem(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
  );
}
