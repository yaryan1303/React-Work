import { useReducer, useState } from "react";
import "./App.css";

const CON={
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
}

function reducer(state, action) {
  switch (action.type) {
    case CON.INCREMENT:
      return { count: state.count + 1 };
    case CON.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: CON.INCREMENT });
  }
  function decrement() {
    dispatch({ type: CON.DECREMENT });
  }

  return (
    <>
      <button onClick={increment}>+</button>
      <h1>{state.count}</h1>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
