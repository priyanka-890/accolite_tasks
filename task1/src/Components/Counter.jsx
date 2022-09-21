import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, reduceCounter } from "../Redux/action";
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCounter(1));
  };
  const handleReduce = () => {
    dispatch(reduceCounter(1));
  };

  return (
    <>
      <button onClick={handleAdd} data-testid="up" className="btn">
        {" "}
        add
      </button>
      <button onClick={handleReduce} data-testid="down" className="btn">
        {" "}
        reduce
      </button>
      <div data-testid="result" className="result">
        {" "}
        {count}
      </div>
    </>
  );
};

export default Counter;
