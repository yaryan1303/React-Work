import HeadingCal from "../../../../Cal/Components/HeadingCal"
import styles from "./App.module.css"
function App() {

  return (
    <>
    <center>
      <HeadingCal></HeadingCal>
    </center>

    <div className={styles.container}>
      <input type="text" readOnly className={styles.inputtext}/>
      <div className={styles.buttonsContainer}>
        <button className={styles.btn}>1</button>
        <button className={styles.btn}>1</button>
        <button className={styles.btn}>1</button>
        <button className={styles.btn}>1</button>
        <button className={styles.btn}>1</button>
        <button className={styles.btn}>1</button>
      </div>

    </div>

    </>
  )
}

export default App
