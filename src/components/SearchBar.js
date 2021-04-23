import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

const SearchBar = ({ showBrand }) => {
  const [searchBrands, setSearchBrands] = useState("");

  const handleChage = (e) => {
    e.preventDefault();
    setSearchBrands(e.target.value);

    if (searchBrands.length > 0) {
      showBrand = showBrand.filter((t) => {
        return t.brand_name.match(searchBrands);
      });
    }
  };

  return (
    <form className="search">
      <input
        type="text"
        placeholder="브랜드를 검색해보세요"
        className="search_bar"
        name="searchText"
        onChange={handleChage}
        value={searchBrands}
      />
      <button type="submit" className="search_submit">
        <FontAwesomeIcon icon={faSearch} className="search_icon" />
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  showInfo: state.showInfo,
});

export default connect(mapStateToProps)(SearchBar);
