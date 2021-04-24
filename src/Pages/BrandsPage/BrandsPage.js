import React, { useState, Component, useEffect } from "react";
import { se } from "../../redux-Moduls/actions";
import SearchBar from "../../components/SearchBar";
import FooterContent from "../../components/FooterContent";

import BrandScreen from "./BrandScreen";
import CategoryBtn from "./CategoryBtn";
import { connect } from "react-redux";

const BrandPages = ({ showInfo }) => {
  const [showBrand, setShowBrand] = useState([]);
  const [categoriesBtn, setCategoriesBtn] = useState("All");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterBrands, setFilterBrands] = useState([]);
  // const filterBrand = () => {
  //   if (categoriesBtn === "All") {
  //     setShowBrand(brands);
  //     return;
  //   }
  //   const filteredBrand = brands.filter((b) => b.category === categoriesBtn);
  //   setShowBrand(filteredBrand);
  // };

  useEffect(() => {
    categoriesBtn === "All"
      ? setShowBrand(showInfo)
      : setShowBrand(showInfo.filter((br) => br.category === categoriesBtn));
  }, [categoriesBtn]);

  useEffect(() => {
    setFilterBrands(
      showBrand.filter((b) =>
        b.brand_name.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search, showBrand]);
  return (
    <>
      <div id="brands_view">
        <div className="brand_left_view">
          <header className="brand_header">
            <h2>좋아하는 브랜드를 찾아보세요.</h2>
          </header>
          <div className="brand_search_box">
            <SearchBar onChange={(e) => setSearch(e.target.value)} />
            {/* <input
            type="text"
            className="searchingBox"
            placeholder="검색어를 입력하세요"
          ></input>
          <img className="glass" src={search} /> */}
            {/* <input
              type="text"
              placeholder="브랜드를 검색해봐"
              onChange={(e) => setSearch(e.target.value)}
            ></input> */}
          </div>

          <article className="category_btn_box">
            <CategoryBtn
              name="All"
              categoryActive={categoriesBtn === "All" ? true : false}
              handleSetCategory={setCategoriesBtn}
            />
            <CategoryBtn
              name="IT&미디어"
              categoryActive={categoriesBtn === "IT&미디어" ? true : false}
              handleSetCategory={setCategoriesBtn}
            />
            <CategoryBtn
              name="커피&음료"
              categoryActive={categoriesBtn === "커피&음료" ? true : false}
              handleSetCategory={setCategoriesBtn}
            />
            <CategoryBtn
              name="자동차"
              categoryActive={categoriesBtn === "자동차" ? true : false}
              handleSetCategory={setCategoriesBtn}
            />
          </article>
        </div>
        <div className="brand_right_view">
          {/* {brands.map((br, idx) => (
            <BrandScreen key={br._id} brandData={br} />
          ))} */}
          {/* <BrandScreen showBrand={showBrand} /> */}
          <div className="brand_scroll_content">
            {filterBrands.map((brand, idx) => (
              // console.log(brand),
              <BrandScreen key={idx} {...brand} />
            ))}
          </div>
        </div>
      </div>
      <FooterContent />
    </>
  );
};

const mapStateToProps = (state) => ({
  showInfo: state.showInfo.brands,
});

export default connect(mapStateToProps)(BrandPages);
