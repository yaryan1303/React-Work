import styles from "./Items.module.css";
const List = ({ items }) => {

  const handleByButtonClicked=(item)=>{
    console.log(`item being brrought ${item}`)

  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item} className="list-group-item">
          {item.toUpperCase()}
          <button type="button" className={`${styles.btn} btn btn-info`} onClick={()=>handleByButtonClicked(item)}>
            Buy
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
