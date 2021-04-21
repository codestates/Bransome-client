import React from "react";

const HistoryContents = ({ historyData }) => {
  return (
    <article id="contents">
      <div className="contents-box">{historyData.contents.history}</div>
    </article>
  );
};

export default HistoryContents;
