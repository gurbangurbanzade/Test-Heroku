import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";

export default function Products() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/categories").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);
  return (
    <div>
      Products
      <Formik
        initialValues={{
          categoryId: "",
          name: "",
          unitPrice: "",
          unitStock: "",
          discontinued: "",
          unit: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          //   alert(JSON.stringify(values, null, 2));
          console.log(JSON.stringify(values, null, 2));
          axios.post("https://northwind.vercel.app/api/products", values);
        }}
      >
        <Form>
          <label htmlFor="categoryId">Categories</label>
          <Field as="select" name="categoryId">
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </Field>
          <span></span>
          <br />
          <label htmlFor="name">Name</label>
          <Field name="name" />
          <br />
          <label htmlFor="unitPrice">Unit price</label>
          <Field name="unitPrice" />
          <br />
          <label htmlFor="unitStock">Units in stock</label>
          <Field name="unitStock" />
          <br />
          <label htmlFor="discontinued">Discontinued</label>
          <Field type="checkbox" name="discontinued" />

          <br />
          <label htmlFor="unit">Quentiti Per Unit </label>
          <Field name="unit" />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
