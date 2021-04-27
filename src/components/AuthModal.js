import { useRef, useCallback, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { GLogin, GLogout } from "./auth/GoogleLogin";
import { KLogin } from "./auth/KakaoLogin";
import { resolveConfig } from "prettier";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import modal_background from "../images/home_img/modal_background.jpg";
import modal_logo from "../logos/bransome.png";
const LoginState = ({ login, setLogin }) => {};

const AuthModal = ({ show, setShow }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShow(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && show) {
        setShow(false);
      }
    },
    [setShow, show],
  );

  // useEffect(() => {
  //   document.addEventListener("keydown", keyPress);
  //   return () => document.addEventListener("keydown", keyPress);
  // }, [keyPress]);

  return (
    <>
      {show ? (
        <div
          className={show ? "modal_container active" : "modal_container"}
          onClick={closeModal}
          ref={modalRef}
        >
          <section className="modal_item" data-aos="zoom-in">
            <article className="modal_main_image">
              <div className="modal_main_title">Think Bransome.</div>
              <img src={modal_background} />
            </article>
            <article className="modal_contents">
              <div className="login_title">
                <img src={modal_logo} className="modal_logo" />
              </div>
              {/* {isLogin ? 
                <div>
                  <button>마이페이지<button>
                    <Logout />
                  <div> : <Login />} */}
              <GLogin />
              <KLogin />
              <div className="login_text">
                SNS계정으로 간편하게 로그인하세요.
              </div>
            </article>
            <button
              className="modal_close_btn"
              aria-label="Close modal"
              onClick={() => setShow((open) => !open)}
            >
              <FontAwesomeIcon className="esc_btn_svg" icon={faTimes} />
            </button>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default AuthModal;
