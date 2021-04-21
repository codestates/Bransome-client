import github from "../logos/github_logo.png";
import googlePlus from "../logos/google.png";
import apple from "../logos/apple.png";

const FooterContent = () => {
  return (
    <footer id="footer_container">
      <div className="footer_text_area">
        <p className="footer_text1">Bransome v.Demo © 2021 Bgle</p>
        <p className="footer_text2">
          Team. Bgle - Sangun Lee, Sunghyun Hong, Seonah Park, Sungwoo Lee
        </p>
      </div>
      <div className="footer_btn_box">
        <a
          className="social_btn"
          href="https://github.com/codestates/Bransome-client"
          target="_blank"
          rel="noreferrer"
        >
          <img className="github_btn" src={github} />
        </a>
        <a
          className="social_btn"
          href="https://www.google.co.kr/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="google_btn" src={googlePlus} />
        </a>
        <a
          className="social_btn"
          href="https://www.apple.com/kr"
          target="_blank"
          rel="noreferrer"
        >
          <img className="apple_btn" src={apple} />
        </a>
      </div>
    </footer>
  );
};

export default FooterContent;
