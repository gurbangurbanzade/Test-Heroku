import React from "react";
import { useEffect, useState } from "react";

const QuestionList = () => {
  let arr1 = [
    {
      id: "sign-up-form",
      name: "Sign-Up Form",
      category: "HTML",
    },
    {
      id: "item-cart",
      name: "Item Cart",
      category: "HTML",
    },
    {
      id: "spaghetti-recipe",
      name: "Spaghetti Recipe",
      category: "HTML",
    },
    {
      id: "blog-post",
      name: "Blog Post",
      category: "HTML",
    },
    {
      id: "rainbow-circles",
      name: "Rainbow Circles",
      category: "CSS",
    },
    {
      id: "navbar",
      name: "Navbar",
      category: "CSS",
    },
  ];
  let arr2 = [
    {
      questionId: "blog-post",
      status: "CORRECT",
    },
    {
      questionId: "throttle",
      status: "INCORRECT",
    },
    {
      questionId: "stopwatch",
      status: "PARTIALLY_CORRECT",
    },
    {
      questionId: "pig-emoji",
      status: "CORRECT",
    },
    {
      questionId: "todo-list",
      status: "CORRECT",
    },
  ];
  const [data, setData] = useState;
  return (
    <>
      <div className="category">
        <h2>{item.category} 1 / 5</h2>
        <div className="question">
          <div className="status incorrect"></div>
          <h3>Rainbow Circles</h3>
        </div>
        <div className="question">
          <div className="status partially-correct"></div>
          <h3>Navbar</h3>
        </div>
      </div>
    </>
  );
};

export default QuestionList;
