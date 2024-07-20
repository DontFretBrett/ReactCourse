
import { useState } from "react";

function ListGroup() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'Paris'];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className={index === selectedIndex ? "list-group-item active" : "list-group-item"} 
          onClick={() => setSelectedIndex(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
