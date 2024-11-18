import Items from "./Components/Items";
import ErrorMsg from "./Components/ErrorMsg";
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
  const [boughtItems, setBoughtItems] = useState([]); // To keep track of bought items

  const handleOnChange = (event) => {
    setChangeValue(event.target.value); // Update input value
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && changeValue.trim() !== "") {
      setFoodItemValue([...foodItems, changeValue]); // Add new item
      setChangeValue(""); // Clear input field
    }
  };

  const handleBuyItem = (item) => {
    if (!boughtItems.includes(item)) {
      setBoughtItems([...boughtItems, item]); // Add item to bought list
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

      <Items
        items={foodItems}
        boughtItems={boughtItems}
        onBuyItem={handleBuyItem}
      />

      <ErrorMsg items={foodItems} />
    </Container>
  );
}

export default App;
