import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCarousel from "../../components/CategoryCarousel";
import CategoryMenu from "../../components/CategoryMenu";
import allBrand from "../../images/home_img/allbrand.jpg";
import cola from "../../images/home_img/cola.jpg";
import nike from "../../images/home_img/nike.jpg";
import tesla from "../../images/home_img/tesla.jpg";

const BrandCategoryView = () => {
  const [screen, setScreen] = useState();

  // useEffect(() => {
  //   const screenSize = window.innerWidth <= 850;
  //   return screenSize;
  // });

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };
  return (
    <section id="best_view_container">
      <header>
        <h1 className="view_title">요새 핫한 브랜드는 뭐가 있을까?</h1>
      </header>
      <article>
        <ul className="category_container">
          <div className="all">
            <li></li>
            <span className="category_name">브랜드 전체</span>
          </div>
          <div className="cola">
            <li></li>
            <span className="category_name">커피 / 음료</span>
          </div>
          <div className="nike">
            <li></li>
            <span className="category_name">스포츠</span>
          </div>
          <div className="tesla">
            <li></li>
            <span className="category_name">자동차</span>
          </div>
        </ul>
      </article>
    </section>
  );
};

export default BrandCategoryView;
