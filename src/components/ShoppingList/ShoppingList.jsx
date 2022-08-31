import React from "react";
import AddItem from "../AddItem/AddItem";
import List from "../List/List";
import "./ShoppingList.scss";

const ShoppingList = ({
  customInput,
  updateItem,
  onSubmit,
  shoppingList,
  onRemove,
  theme,
}) => {
  return (
    <div className={`shoppingListWrapper ${theme}-primary`}>
      {customInput ? (
        <h2 className={`${theme}-text`}>Press Enter to Submit</h2>
      ) : (
        <h2 className={`${theme}-text`}>Please enter an item</h2>
      )}
      <AddItem
        customInput={customInput}
        onChange={updateItem}
        onSubmit={onSubmit}
      />
      <br />
      <List theme={theme} shoppingList={shoppingList} onRemove={onRemove} />
    </div>
  );
};

export default ShoppingList;
