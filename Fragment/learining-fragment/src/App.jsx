import Items from "./Components/Items";
import ErrorMeg from "./Components/ErrorMsg";

function App() {
  // let foodItems=[];
  let foodItems = ['Dal', 'Milk', 'Roti', 'Green Vegetables', 'Ghee','Chawal']; 
  // Change to [] to test empty scenario

  return (
    <>
      <center>
        <h1>Healthy Food</h1>
      </center>

      <Items items={foodItems} />
      <ErrorMeg items={foodItems} />
    </>
  );
}

export default App;
