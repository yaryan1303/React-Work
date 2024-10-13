const List = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item} className="list-group-item">
          {item.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

export default List;
