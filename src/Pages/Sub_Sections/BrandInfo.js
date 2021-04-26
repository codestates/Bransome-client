import { Link, useParams } from "react-router-dom";

import React, { useState } from "react";

import { connect } from "react-redux";
import FooterContent from "../../components/FooterContent";
import BrandInfoDetails from "./sections/BrandInfoDetails";

const BrandInfo = ({ showInfo, match }) => {
  const { id } = useParams();

  let detailBrands = showInfo.brands.find((item) => item._id === parseInt(id));

  return (
    <div id="brandinfo_container">
      <div className="brandinfo_contents_box">
        <Link to="/brand" className="back_btn_location">
          <button className="back_btn">뒤로가기</button>
        </Link>

        <article className="brandInfo_logo">
          <a href={detailBrands.brand_link} target="_blank" rel="noreferrer">
            <img
              id="brands_logo"
              src={detailBrands.brand_main_image}
              alt="brandInfo"
            />
          </a>
        </article>

        <article className="contents_main_content">
          <BrandInfoDetails infoData={detailBrands} />
        </article>
      </div>
      <FooterContent />
    </div>
  );
};

const mapStateToProps = (state) => ({
  showInfo: state.showInfo,
});

export default connect(mapStateToProps)(BrandInfo);
