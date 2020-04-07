import { LOAD_CITIES, LOAD_HOME_PAGE_DATA } from "../actions/home/actionTypes";

const initialState = {
  country: "IN",
  cities: {
    error: null,
    loading: false,
    items: [],
  },
  homePageData: {
    error: null,
    loading: false,
    data: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CITIES:
      return {
        ...state,
        cities: { ...action.data },
      };
    case LOAD_HOME_PAGE_DATA:
      return {
        ...state,
        homePageData: { ...action.data },
      };
    default:
      return state;
  }
}
