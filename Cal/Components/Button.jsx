import styles from "./Button.module.css";

function Button({ items, onButtonClick }) {
  return items.map((item) => (
    <button
      key={item}
      classNameName={styles.btn}
      onClick={() => onButtonClick(item)}
    >
      {item}
    </button>
  ));
}

export default Button;
