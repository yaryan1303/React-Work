import Heading from "./Components/Heading";
import Tudo from "./Components/Tudo";
import List from "./Components/List";

import "./App.css"
function App() {
  return (
    <center className="tudo-container">
      <Heading></Heading>
      <Tudo></Tudo>
      <div className="items-contaniner">
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      </div>
    </center>
  );
}

export default App;
