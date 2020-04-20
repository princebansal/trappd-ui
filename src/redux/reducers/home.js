import {
  LOAD_HOME_PAGE_DATA,
  LOAD_GEO,
  CHANGE_ACTIVE_DETAIL_PANE,
  LOAD_QUICK_GAME_DATA,
} from "../actions/home/actionTypes";
import { getRegionName } from "../../utils/Util";

const initialState = {
  activeDetailPane: null,
  country: "IN",
  regionName: null,
  geo: {
    error: null,
    loading: false,
    items: {
      cities: [],
      states: [],
      countries: [],
    },
  },
  homePageData: {
    error: null,
    loading: false,
    data: null,
  },
  quickGameData: {
    error: null,
    loading: false,
    data: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
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
        activeDetailPane: "insights",
      };
    case CHANGE_ACTIVE_DETAIL_PANE:
      return {
        ...state,
        activeDetailPane: action.activeDetailPane,
      };
    case LOAD_QUICK_GAME_DATA:
      return {
        ...state,
        quickGameData: { ...action.data },
      };
    default:
      return state;
  }
}
