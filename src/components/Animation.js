import React, { useEffect, useState } from "react";
import "../css/animation.css";
import netflix from "../images/motion_svg/netflix-icon-2016-1.svg";
import spotify from "../images/motion_svg/spotify.svg";
import mcdonald from "../images/motion_svg/mcdonald-s-15.svg";
import google from "../images/motion_svg/google-icon.svg";
import airbnb from "../images/motion_svg/airbnb-1.svg";
import apple from "../images/motion_svg/apple.svg";

const Animation = () => {
  const [position, setPosition] = useState(0);
  console.log(window.scrollY);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="logo_animation">
      <div className="logo_animation_container">
        <div className="motion_box">
          <div
            className="motion1"
            style={{
              transform: `translateX(${position / 3}px)`,
            }}
          >
            Inspired
            <div className="logo">
              <img src={airbnb} />
            </div>
            Branding
            <div className="logo">
              <img src={spotify} />
            </div>
            Inspired
            <div className="logo">
              <img src={netflix} />
            </div>
            Branding
          </div>

          <div
            className="motion2"
            style={{
              transform: `translateX(${-position / 5}px)`,
            }}
          >
            Google
            <div className="logo">
              <img src={google} />
            </div>
            Apple
            <div className="logo">
              <img src={apple} />
            </div>
            Mcdonald
            <div className="logo">
              <img src={mcdonald} className="mc" />
            </div>
            Amazon
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
