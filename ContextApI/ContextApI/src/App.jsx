import Login from "./Components/Login";
import UserContextProvider from "./Contextt/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
