import React from "react";
import "./ListItem.scss";

function ListItem({ theme, value, onRemove, index }) {
  if (Math.abs(index % 2) === 1) {
    return (
      <li className={`listItem ${theme}-text ${theme}-secondary`}>
        {value}
        <button onClick={onRemove}>Remove</button>
      </li>
    );
  }
  return (
    <li className={`listItem ${theme}-text`}>
      {value}
      <button onClick={onRemove}>Remove</button>
    </li>
  );
}

export default ListItem;
