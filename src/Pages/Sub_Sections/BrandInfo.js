import {
  NavLink as Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useParams,
} from "react-router-dom";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart } from "@fortawesome/free-regular-svg-icons";

import {
  faBookmark as faBookUnMark,
  faHeart as faUnHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import history from "./sections/BrandInfoHistory";
import chart from "./sections/BrandInfoChart";
import insight from "./sections/BrandInfoInsight";

import { connect } from "react-redux";
import FooterContent from "../../components/FooterContent";

const BrandInfo = ({ showInfo }) => {
  const { id } = useParams();
  let detailBrands = showInfo.brands.find(
    (item) => item.brand_id === parseInt(id),
  );

  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };

  const [heart, setHeart] = useState(false);

  const handleHeart = () => {
    setHeart(!heart);
  };

  return (
    <div id="brandinfo_container">
      <article className="brandInfo_logo">
        <img
          id="brands_logo"
          src={detailBrands.brand_main_image}
          alt="brandInfo"
        />
      </article>
      <section id="contents-top">
        <div className="contents-action">
          <Link to="/brand">
            <button className="back_btn">뒤로가기</button>
          </Link>
          <div className="views">15.8k</div>
          <div className="eyeIcon">
            <FontAwesomeIcon icon={faEye} />
          </div>

          {/* 하트 온, 오프 */}
          <div className="heartIcon" onClick={handleHeart}>
            {heart ? (
              <FontAwesomeIcon className="heartIconOn" icon={faUnHeart} />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
          </div>

          {/* 북마크 온, 오프 */}
          <div className="bookmarkIcon" onClick={handleBookmark}>
            {bookmark ? (
              <FontAwesomeIcon icon={faBookUnMark} />
            ) : (
              <FontAwesomeIcon icon={faBookmark} />
            )}
          </div>
        </div>
      </section>
      <article id="ssssss"></article>
      <FooterContent />
    </div>
  );
};

const mapStateToProps = (state) => ({
  showInfo: state.showInfo,
});

export default connect(mapStateToProps)(BrandInfo);
