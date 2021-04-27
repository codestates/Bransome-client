const BrandRanking = ({ brand_sub_image, brand_name }) => {
  return (
    <li className="brand_ranking">
      <img className="brand_ranking_img" src={brand_sub_image} />
      <p className="brand_ranking_name">{brand_name}</p>
    </li>
  );
};

export default BrandRanking;
