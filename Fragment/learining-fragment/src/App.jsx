
function App() {

  let foodItems=['Dal','Milk','Roti','Green Vegitables','Gee']
  return (
    <>
      <center>
        <h1>Healthy Food</h1>
      </center>
      <ul className="list-group">
        {foodItems.map(item=><li key={item} className="list-group-item">{item.toUpperCase()}</li>
)}
      </ul>
    </>
  );
}

export default App;
