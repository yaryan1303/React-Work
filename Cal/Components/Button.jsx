 import styles from "./Button.module.css"
function Button({item})
{
  return (
  item.map(i=>
    <button key={i}  className={styles.btn}>{i}</button>

  )
);

}

export default Button;