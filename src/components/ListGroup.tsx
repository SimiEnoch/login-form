import { useState } from "react";


interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item:string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
    const [selectedIndex, setSelectediNDEX] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? (
        <p>No items</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {setSelectediNDEX(index);
        onSelectItem(item);
            }}
            >
              {item}
            </li>
          ))}
        </ul>
        
      )}
    </>
  );
}

export default ListGroup;
