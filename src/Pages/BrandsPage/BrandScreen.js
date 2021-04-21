import React from "react";
import { Link } from "react-router-dom";

const BrandScreen = ({ showBrand }) => {
  return (
    <div className="brand_scroll_content">
      {/* <Link to={`/brandinfo/${brandData._id}`}>
        <img className="brand_img" src={brandData.brand_main_image}></img>
      </Link> */}

      <React.Fragment>
        {showBrand.map((item, idx) => {
          return (
            <Link
              key={idx}
              className="brand_img_box"
              to={`/brandInfo/${item._id}`}
            >
              <img className="brand_img" src={item.brand_main_image} />
            </Link>
          );
        })}
      </React.Fragment>
    </div>
  );
};

export default BrandScreen;
