import brandData from "../../Pages/DummyData/DummyBrandInfo";
const initialState = {
  brands: brandData,
  brandSearh: [],

  value: "",
  brandName: [],
  loading: false,
  openModalScreen: false,
};

export default initialState;
