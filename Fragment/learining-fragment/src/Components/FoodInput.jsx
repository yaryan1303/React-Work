import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange, handleKeyDown, value }) => {
  return (
    <input
      type="text"
      classNameName={styles.FoodInput}
      placeholder="Search Food Item here"
      onChange={handleOnChange} // Handle input change
      onKeyDown={handleKeyDown} // Detect 'Enter' key
      value={value} // Bind input value
    />
  );
};

export default FoodInput;
