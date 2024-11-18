import styles from "./Items.module.css";

const Items = ({ items, boughtItems, onBuyItem }) => {
  return (
    <ul classNameName="list-group">
      {items.map((item, index) => (
        <li
          key={index}
          classNameName={`list-group-item ${
            boughtItems.includes(item) ? "active" : ""
          }`}
        >
          {item.toUpperCase()}
          <button
            type="button"
            classNameName={`${styles.btn} btn btn-info`}
            onClick={() => onBuyItem(item)}
          >
            Buy
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Items;
