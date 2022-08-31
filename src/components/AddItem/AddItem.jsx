import React from "react";
import "./AddItem.scss";

const AddItem = ({ onSubmit, customInput, onChange }) => {
  return (
    <div className="formWrapper">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="customInput"
          type="text"
          value={customInput}
          onChange={onChange}
        />
        <button className="submitButton" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
