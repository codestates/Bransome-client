import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart } from "@fortawesome/free-regular-svg-icons";
import { NavLink as Link } from "react-router-dom";

import History from "./History";
import Chart from "./Chart";
import Insight from "./Insight";

import {
  faBookmark as faBookUnMark,
  faHeart as faUnHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const categoryList = ["History", "Chart", "Insight"];
// console.log(categoryList);
const BrandInfoDetails = ({ infoData }) => {
  const [bookmark, setBookmark] = useState(false);
  const [heart, setHeart] = useState(false);
  const [active, setActive] = useState(categoryList[0]);

  const handleBookmark = () => {
    setBookmark(!bookmark);
  };

  const handleHeart = () => {
    setHeart(!heart);
  };

  return (
    <>
      <section className="info_box">
        <article className="info_btn_box">
          <a href="/brand" className="Info_btn back_btn">
            뒤로가기
          </a>

          <button
            className="Info_btn history_btn"
            onClick={() => setActive(categoryList[0])}
          >
            히스토리
          </button>
          <button
            className="Info_btn chart_btn"
            onClick={() => setActive(categoryList[1])}
          >
            차트
          </button>
          <button
            className="Info_btn insight_btn"
            onClick={() => setActive(categoryList[2])}
          >
            인사이트
          </button>
        </article>
        <article className="info_btn_box2">
          <div className="views">15.8k</div>
          <div className="eye_icon">
            <FontAwesomeIcon icon={faEye} />
          </div>
          {/* 하트 온, 오프 */}
          <div className="heart_icon" onClick={handleHeart}>
            {heart ? (
              <FontAwesomeIcon className="heart_icon_On" icon={faUnHeart} />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
          </div>
          {/* 북마크 온, 오프 */}
          <div className="bookmark_icon" onClick={handleBookmark}>
            {bookmark ? (
              <FontAwesomeIcon icon={faBookUnMark} />
            ) : (
              <FontAwesomeIcon icon={faBookmark} />
            )}
          </div>
        </article>
      </section>
      <section>
        {active === "History" && <History historyData={infoData} />}
        {active === "Chart" && <Chart chartData={infoData} />}
        {active === "Insight" && <Insight insightData={infoData} />}
      </section>
    </>
  );
};

export default BrandInfoDetails;
