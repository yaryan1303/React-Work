import styles from "./inputText.module.css";

const InputText = ({ value }) => {
  return (
    <input
      type="text"
      readOnly
      classNameName={styles.inputtext}
      value={value}
    />
  );
};

export default InputText;
