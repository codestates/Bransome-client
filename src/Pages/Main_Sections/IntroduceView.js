import apple1976 from "../../images/apple1976.jpeg";
import { Link } from "react-router-dom";

const Introduce = () => {
  return (
    <section id="introduce_view">
      <div className="introduce_container">
        <div className="article_box">
          <span className="article_title">애플의 출발점은 어땠을까?</span>
          <span className="article_subTitle">
            새로운 영감과 인사이트를 얻고 브랜드의 가능성을 확인하세요.
          </span>
          <Link to="/brandInfo/1">
            {" "}
            <button className="article_btn">자세히 알아보기</button>{" "}
          </Link>
        </div>

        <div className="article_img_box">
          <img src={apple1976} />
        </div>
      </div>
    </section>
  );
};

export default Introduce;
