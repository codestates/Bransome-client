import React from "react";

const InsightContents = ({ insightData }) => {
  return (
    <article id="contents">
      <div className="contents-box">
        <button className="contents_btn">공홈</button>
        <button className="contents_btn">관련 아티클</button>
        <button className="contents_btn">넷플릭스 '한달 무료' 종료된다?</button>
        <button className="contents_btn">관련 이미지</button>
        <button className="contents_btn">관련 뉴스</button>
      </div>
    </article>
  );
};

export default InsightContents;
