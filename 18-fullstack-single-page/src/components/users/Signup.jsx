import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";

export const Signup = () => {
  const validate = Yup.object({
    firstname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastname: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    birthdate: Yup.date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        // eslint-disable-next-line no-undef
        const result = parse(originalValue, "dd.MM.yyyy", new Date());
        return result;
      })
      .typeError("please enter a valid date")
      .required()
      .min("1969-11-13", "Date is too early"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
  });

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        birthdate: "",
        email: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        axios.post("http://localhost:3000/products", values).then(() => {
          resetForm();
        });
      }}
    >
      {() => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="firstname" name="firstname" type="text" />
            <TextField label="lastname" name="lastname" type="text" />
            <TextField label="birthdate" name="birthdate" type="date" />

            <TextField label="Email" name="email" type="email" />

            <button className="btn btn-dark mt-3" type="submit">
              Add
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
                         </div>
      )}
    </Formik>
  );
};
