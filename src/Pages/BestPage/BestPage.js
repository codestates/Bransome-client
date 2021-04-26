import { NavLink as Link } from "react-router-dom";
import React, { useState, Component, useEffect } from "react";
import { connect } from "react-redux";
import CategoryBtn from "./section/CategoryBtn";
import BrandRanking from "./section/BrandRanking";
import FooterContent from "../../components/FooterContent";

const Best20 = ({ showInfo }) => {
  const [brandRanking, setBrandRanKing] = useState([]);
  const [bestCategoryBtn, setBestCategoryBtn] = useState("All");

  useEffect(() => {
    bestCategoryBtn === "All"
      ? setBrandRanKing(showInfo)
      : setBrandRanKing(
          showInfo.filter((br) => br.category === bestCategoryBtn),
        );
  }, [bestCategoryBtn]);

  return (
    <>
      <div id="best_container">
        <section className="best_title_wrap">
          <CategoryBtn
            name="All"
            categoryActive={bestCategoryBtn === "All" ? true : false}
            handleSetCategory={setBestCategoryBtn}
          />
          <CategoryBtn
            name="IT&미디어"
            categoryActive={bestCategoryBtn === "IT&미디어" ? true : false}
            handleSetCategory={setBestCategoryBtn}
          />
          <CategoryBtn
            name="커피&음료"
            categoryActive={bestCategoryBtn === "커피&음료" ? true : false}
            handleSetCategory={setBestCategoryBtn}
          />
          <CategoryBtn
            name="자동차"
            categoryActive={bestCategoryBtn === "자동차" ? true : false}
            handleSetCategory={setBestCategoryBtn}
          />
        </section>
        <section className="best_rankings_wrap">
          <ul className="best_view best10">
            <p>TOP 1~10</p>
            {brandRanking.map((ranking, idx) => {
              if (idx < 10) {
                return <BrandRanking key={idx} {...ranking} />;
              }
            })}
          </ul>
          <ul className="best_view best20">
            <p>TOP 11~20</p>
            {brandRanking.map((ranking, idx) => {
              if (idx > 9 && idx < 20) {
                return <BrandRanking key={idx} {...ranking} />;
              }
            })}
          </ul>
          {/* <ul className="best_rankings_box_one_to_ten">
          <li>
            <div className="ranking">1</div>
            <img className="logo" src={apple} />
            <div className="brand_name">Apple</div>
          </li>
          <li>
            <div className="ranking">2</div>
            <img className="logo" src={amazon} />
            <div className="brand_name">Amazon</div>
          </li>
          <li>
            <div className="ranking">3</div>
            <img className="logo" src={google} />
            <div className="brand_name">Google</div>
          </li>
          <li>
            <div className="ranking">4</div>
            <img className="logo" src={ms} />
            <div className="brand_name">MS</div>
          </li>
        </ul> */}
        </section>
      </div>
      <FooterContent />
    </>
  );
};

const mapStateToProps = (state) => ({
  showInfo: state.showInfo.brands,
});

export default connect(mapStateToProps)(Best20);
