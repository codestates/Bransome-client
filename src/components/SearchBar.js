import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

const SearchBar = ({ onChange }) => {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="브랜드를 검색해보세요. ex)tesla, apple"
        className="search_bar"
        name="searchText"
        onChange={onChange}
      />
      <button type="submit" className="search_submit">
        <FontAwesomeIcon icon={faSearch} className="search_icon" />
      </button>
    </form>
  );
};

export default SearchBar;
