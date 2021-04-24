import React from "react";
import "../css/animation.css";
import {
  faGoogle,
  faAirbnb,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Animation = () => {
  return (
    <div className="logo_animation">
      <div className="logo_animation_container">
        <div className="motion_box">
          <div className="text_logo">
            "branding"
            <div className="logo">
              <FontAwesomeIcon icon={faGoogle} />
            </div>
            "Inspired"
            <div className="logo">
              <FontAwesomeIcon icon={faApple} />
            </div>
            "branding"
          </div>

          <div className="text_logo">
            "Google"
            <div className="logo">
              <FontAwesomeIcon icon={faGoogle} />
            </div>
            "apple"
            <div className="logo">
              <FontAwesomeIcon icon={faApple} />
            </div>
            "Google"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
