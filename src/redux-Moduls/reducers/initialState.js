import brandData from "../../Pages/DummyData/DummyBrandInfo";
const initialState = {
  brands: brandData,
  text: "",
  brandSearch: [],
  loading: false,
  brand: [],
  openModalScreen: false,
};

export default initialState;
