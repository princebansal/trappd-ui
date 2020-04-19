import {
  LOAD_CITIES,
  LOAD_HOME_PAGE_DATA,
  LOAD_GEO,
} from "../actions/home/actionTypes";
import { getRegionName } from "../../utils/Util";

const initialState = {
  country: "IN",
  regionName: "",
  cities: {
    error: null,
    loading: false,
    items: [],
  },
  geo: {
    error: null,
    loading: false,
    items: {
      cities: [],
      states: [],
    },
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
    case LOAD_GEO:
      return {
        ...state,
        geo: { ...action.data },
      };
    case LOAD_HOME_PAGE_DATA:
      return {
        ...state,
        homePageData: { ...action.data },
        regionName: getRegionName(action.data.data),
      };
    default:
      return state;
  }
}
