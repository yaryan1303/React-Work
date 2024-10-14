import HeadingCal from "../Components/HeadingCal"
import styles from "./App.module.css"
import Button from "../Components/Button";
function App() {

  let button=['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','AC','.','%'];

  return (
    <>
    <center>
      <HeadingCal></HeadingCal>
    </center>

    <div className={styles.container}>
      <input type="text" readOnly className={styles.inputtext}/>
      <div className={styles.buttonsContainer}>

        <Button item={button}></Button>
      </div>

    </div>

    </>
  )
}

export default App
