import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCarousel from "../../components/CategoryCarousel";
import CategoryMenu from "../../components/CategoryMenu";

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
          <Link to="/brand/All">
            <div className="all">
              <li></li>
              <span className="category_name">브랜드 전체</span>
            </div>
          </Link>
          <Link to="/brand/커피&음료">
            <div className="cola">
              <li></li>
              <span className="category_name">커피 / 음료</span>
            </div>
          </Link>
          <Link to="/brand/IT&미디어">
            <div className="netflix">
              <li></li>
              <span className="category_name">IT / 미디어</span>
            </div>
          </Link>
          <Link to="/brand/자동차">
            <div className="tesla">
              <li></li>
              <span className="category_name">자동차</span>
            </div>
          </Link>
        </ul>
      </article>
    </section>
  );
};

export default BrandCategoryView;
