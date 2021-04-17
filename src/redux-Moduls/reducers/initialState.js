import brandData from "../../Pages/DummyData/brandsLogo";
const initialState = {
  brands: brandData,
  brandSearh: [],

  value: "",
  brandName: [],
  loading: false,
  openModalScreen: false,
};

export default initialState;
