import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  FlipMove  from "react-flip-move";
function Listitems(props) {
  const items = props.items;

  console.log("in list item compmonent", items);
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            value={item.text}
            id={item.key}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => {
                props.deleteItem(item.key);
              }}
            ></FontAwesomeIcon>
          </span>
        </p>
      </div>
    );
  });

  return (
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default Listitems;
