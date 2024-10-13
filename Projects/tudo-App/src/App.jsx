import Heading from "./Components/Heading";
import Tudo from "./Components/Tudo";
import List from "./Components/List";

import "./App.css"
function App() {
  let detail = [
    { todo: "Buy Milk", date: "23/12/2024" },
    { todo: "Buy Bread", date: "23/12/2024" },
    {todo: "Study", date: "23/12/2024" },
    {todo: "Play", date: "23/12/2024" }
];
  return (
    <center className="tudo-container">
      <Heading></Heading>
      <Tudo></Tudo>
      <div className="items-contaniner">
      <List Tudo={detail}></List>
      </div>
    </center>
  );
}

export default App;
