/* type */

export const ACTIONS = {};

export const LOADING = "LOADING";

export const DETAILS = "DETAILS";

/* ACTIONS */

// const a = () => {};

// const b = () => {};

// export const actionCreators = { a, b };

// const brandId = DummyBrandInfo.map((a) => {
//   return a.brand_id;
// });

// const brandName = DummyBrandInfo.map((b) => {
//   return b.brand_name;
// });

// export const searchAction = (values) => (diddddspatch) => {
//   dispatch({
//     type: SEARCH_BRAND,
//     payload: values,
//   });
// };
// export const fetchBrandsAction = () => (dispatch) => {
//   dispatch({
//     type: FIND_BRANDS,
//     payload: brandName,
//   });
// };

// export const fetchBrandAction = () => (dispatch) => {
//   dispatch({
//     type: FIND_BRAND,
//     payload: brandId,
//   });
// };

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
