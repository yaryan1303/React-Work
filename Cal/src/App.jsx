import { useState } from "react";
import HeadingCal from "../Components/HeadingCal";
import styles from "./App.module.css";
import Button from "../Components/Button";
import InputText from "../Components/inputText";

function App() {
  const [input, setInput] = useState(""); // Track calculator input
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    "AC",
    ".",
    "%",
  ];

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setInput(""); // Clear input
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); // Calculate result
      } catch {
        setInput("Error"); // Display error on invalid calculation
      }
    } else {
      setInput(input + value); // Append button value to input
    }
  };

  return (
    <>
      <center>
        <HeadingCal />
      </center>

      <div className={styles.container}>
        <InputText value={input} /> {/* Pass input to display */}
        <div className={styles.buttonsContainer}>
          <Button items={buttons} onButtonClick={handleButtonClick} />{" "}
          {/* Pass button click handler */}
        </div>
      </div>
    </>
  );
}

export default App;
