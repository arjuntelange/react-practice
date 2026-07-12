import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../feature/counter/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  return (
    <>
      <h2>count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <input
        type="text"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
        style={{
          padding: "10px 16px",
          border: "none",
          borderRadius: "14px",
          fontSize: "15px",
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(amount)));
          setAmount("");
        }}
      >
        Add 10+
      </button>
    </>
  );
}

export default Counter;
