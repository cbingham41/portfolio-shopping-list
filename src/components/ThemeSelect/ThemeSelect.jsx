import React from "react";
import "./ThemeSelect.scss";

const ThemeSelect = ({ theme, toggleTheme }) => {
  return (
    <div className={`themeSelect ${theme}-accent`}>
      <h1 className={`header ${theme}-header`}>Shopping List</h1>
      <input
        type="button"
        onClick={toggleTheme}
        value={theme}
        className="themeToggle"
      />
    </div>
  );
};

export default ThemeSelect;
