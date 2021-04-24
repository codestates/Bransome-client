import React from "react";
import { Link } from "react-router-dom";

const BrandScreen = ({ _id, brand_main_image }) => {
  return (
    <React.Fragment>
      {/* <Link to={`/brandinfo/${brandData._id}`}>
        <img className="brand_img" src={brandData.brand_main_image}></img>
      </Link> */}
      <Link className="brand_img_box" to={`/brandInfo/${_id}`}>
        <img className="brand_img" src={brand_main_image} />
      </Link>
    </React.Fragment>
  );
};

export default BrandScreen;
