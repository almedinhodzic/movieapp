import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import "./Search.scss";

const Search: React.FC = () => {
  const [text, setText] = useState("");
  const history = useHistory();
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    history.push(`/search/${text}`);
    setText("");
  };
  return (
    <form onSubmit={onSearch}>
      <div className="search-bar">
        <i className="fas fa-search search-bar__icon" />
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={onInputChange}
          className="search-bar__input"
        />
      </div>
    </form>
  );
};

export default Search;
