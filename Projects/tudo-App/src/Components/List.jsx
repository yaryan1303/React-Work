import { useContext } from "react";
import ListItems from "../Store/List-item-store"; // Import context

const List = ({ onDelete }) => {
  const { detail } = useContext(ListItems); // Access the context value

  return (
    <div>
      {detail.map((item, index) => (
        <div key={index}>
          <span>{item.todo}</span> - <span>{item.date}</span>
          <button onClick={() => onDelete(item.todo)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default List;
