import React from "react";
import { increment, decrement, incrementByAmount } from "../stores/counter";
import { useDispatch } from "react-redux";

export default function CounterActions({ count, setCount }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Azalt (-)</button>
      <button onClick={() => dispatch(increment())}>Artir (+)</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Artir (+5)</button>
    </div>
  );
}
