import Heading from "./Components/Heading";
import InputBox from "./Components/InputBox";
const App = () => {
  return (
    <>
      <Heading />
      <div classNameName="container">
        <InputBox Heading="Enter the Test Here"></InputBox>
      </div>
    </>
  );
};

export default App;
