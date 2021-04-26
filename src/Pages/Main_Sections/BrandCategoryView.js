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
      <p>
        `인텔 코퍼레이션(Intel Corporation, 나스닥: INTC)은 반도체의 설계와
        제조를 하는 미국의 다국적 기업이다. 세계에서 가장 큰 반도체 제조사로
        본사는 캘리포니아주 샌타클래라에 있다. 1968년 7월 18일에 고든 무어와
        로버트 노이스가 인텔을 설립하였다. 인텔은 Integrated Electronics의
        혼성어이다. 그러나 'intelligence'라는 영어 단어에서 유래하였다고
        오해하는 경우도 있다. 레슬리 배다스의 감독 하에, 1971년 최초의
        마이크로프로세서인 인텔 4004를 만들었으며, 이후 만들어진 인텔 8088은 IBM
        PC에 장착되어 유명해졌다. 이때 만들어진 x86 명령어 아키텍처는 확장을
        통해 지금까지 데스크탑 시장에서 널리 쓰이게 되었으며, 일반적으로 PC는
        x86 호환 프로세서를 사용하는 IBM PC 호환기종을 칭하는 말이기도 하다.
        이뿐 아니라 메인보드 칩셋, 네트워크 카드, 집적 회로, 플래시 메모리,
        그래픽 프로세서, 임베디드 프로세서 등의 통신과 컴퓨팅에 관련된 장치도
        만든다.`;
      </p>
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
