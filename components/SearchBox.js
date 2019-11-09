import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <input
      type="search"
      className='textbox'
      name="searchBox"
      defaultValue="Search Robots"
      onChange={searchChange}
    />
  );
};
export default SearchBox;
