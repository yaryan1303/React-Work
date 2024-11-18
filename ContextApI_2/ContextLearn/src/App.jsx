import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Store/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React vidio for Contaxt Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
