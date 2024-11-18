import Heading from "./Components/Heading";
import Tudo from "./Components/Tudo";
import List from "./Components/List";
import WelcomeText from "./Components/WelcomeText";
import { useState } from "react";
import "./App.css";
import ListItems from "./Store/List-item-store"; // Import the context

function App() {
  let [detail, setdatails] = useState([]); // Your state for the to-do list
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo && date) {
      const newItem = { todo: todo, date: date };
      setdatails([...detail, newItem]);
      setTodo("");
      setDate("");
    }
  };

  const handleDeleteByButton = (todo) => {
    const newList = detail.filter((item) => item.todo !== todo);
    setdatails(newList);
  };

  return (
    <ListItems.Provider value={{ detail, setdatails }}>
      {" "}
      {/* Wrap with Provider and pass value */}
      <center classNameName="tudo-container">
        <Heading />
        <Tudo
          handleSubmit={handleSubmit}
          todo={todo}
          date={date}
          setTodo={setTodo}
          setDate={setDate}
        />
        {detail.length === 0 && <WelcomeText />}
        <div classNameName="items-contaniner">
          <List Tudo={detail} onDelete={handleDeleteByButton} />
        </div>
      </center>
    </ListItems.Provider>
  );
}

export default App;
