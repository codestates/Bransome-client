import DummyBrandInfo from "../Pages/DummyData/DummyBrandInfo";

/* type */

export const ACTIONS = {};
// export const NEXT_SLIDE = "NEXT_SLIDE";
// export const PREV_SLIDE = "PREV_SLIDE";
export const SEARCH_BRAND = "SEARCH_BRAND";
export const FIND_BRAND = "FIND_BRAND";
export const LOADING = "LOADING";

export const GOOGLE_OAUTH2 = "GOOGLE_OAUTH2";
export const FETCH_BRANDS = "FETCH_BRANDS";
export const FILTER_BRAND_BY_CATEGORY = "FILTER_BRAND_BY_CATEGORY";

export const ADD_BRAND = "ADD_BRAND";
export const REMOVE_BRAND = "REMOVE_BRAND";
export const DETAILS = "DETAILS";

/* ACTIONS */

// const a = () => {};

// const b = () => {};

// export const actionCreators = { a, b };

export const searchChangeAction = (values) => (dispatch) => {
  dispatch({
    type: SEARCH_BRAND,
    payload: values,
  });
};
export const fetchBrandsAction = () => (dispatch) => {
  dispatch({
    type: FIND_BRAND,
    payload: DummyBrandInfo,
  });
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
