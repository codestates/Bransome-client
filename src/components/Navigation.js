import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import "../css/AuthModal.css";
import MainLogo from "../logos/기본 로고-003.png";
import { openModal, closeModal } from "../redux-Moduls/actions";
import AuthModal from "./AuthModal";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [navbar_box, setNavbar_box] = useState(false);
  const manageState = () => {
    setOpen((show) => !show);
  };

  const changeBackground = () => {
    //console.log(window.scrollY);
    if (window.scrollY >= 150) {
      setNavbar_box(true);
    } else {
      setNavbar_box(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar_box ? "navbar_box active" : "navbar_box"}>
      <div className="navbar_container">
        <Link to="/" className="navbar_logo">
          <img id="logos" src={MainLogo} />
        </Link>

        <ul className="navbar_item_box">
          <li className="navbar_item">
            <Link to="/" className="navbar_link_btn navbar_home_btn">
              Home
            </Link>
          </li>
          <li className="navbar_item">
            <Link to="/brand" className="navbar_link_btn navbar_brand_btn">
              Brands
            </Link>
          </li>
          <li className="navbar_item">
            <Link to="/best20" className="navbar_link_btn navbar_best_btn">
              Best20
            </Link>
          </li>

          <li className="navbar_sign_box navbar_item">
            {/* {isLogin ? (
              <div>
                <div>김코딩</div>
                <div>유저이미지</div>
              </div>
            ) : (
              <button className="modal_login_btn" onClick={manageState}>
                로그인
              </button>
            )} */}
            <button className="modal_login_btn" onClick={manageState}>
              로그인
            </button>
            <AuthModal show={open} setShow={setOpen} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
