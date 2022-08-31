import React from "react";
import ListItem from "./ListItem/ListItem";
import "./List.scss";

const List = ({ theme, shoppingList, onRemove }) => {
  return (
    <ul className={`List ${theme}-background`}>
      {shoppingList.map((value, index) => {
        return (
          <ListItem
            key={`shoppingList-${value}-${index}`}
            theme={theme}
            value={value}
            onRemove={() => onRemove(index)}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default List;
