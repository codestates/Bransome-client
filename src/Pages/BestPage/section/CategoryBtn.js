import { Link } from "react-router-dom";

const CategoryBtn = ({ name, handleSetCategory, catogryActive }) => {
  return (
    <button
      className={`category_btn2 ${catogryActive ? "categoryActive2" : null}`}
      onClick={() => handleSetCategory(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default CategoryBtn;
