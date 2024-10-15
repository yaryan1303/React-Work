import Items from "./Components/Items";
import ErrorMeg from "./Components/ErrorMsg";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  const [changeValue, setChangeValue] = useState("");
  const [foodItems, setFoodItemValue] = useState([
    "Dal",
    "Milk",
    "Roti",
    "Green Vegetables",
  ]);

  const handleOnChange = (event) => {
    setChangeValue(event.target.value); // Update input value
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && changeValue.trim() !== "") {
      setFoodItemValue([...foodItems, changeValue]); // Add new item
      setChangeValue(""); // Clear input field
    }
  };

  return (
    <Container>
      <center>
        <h1>Healthy Food</h1>
      </center>

      <FoodInput 
        handleOnChange={handleOnChange} 
        handleKeyDown={handleKeyDown} 
        value={changeValue} 
      />

      <Items items={foodItems} />
      <ErrorMeg items={foodItems} />
    </Container>
  );
}

export default App;
