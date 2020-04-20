import { handleErrors } from "../../../config";
import {
  CHANGE_ACTIVE_DETAIL_PANE,
  LOAD_GEO,
  LOAD_HOME_PAGE_DATA,
  LOAD_QUICK_GAME_DATA,
} from "./actionTypes";

export const loadGeo = (countryCode) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_GEO,
      data: {
        error: null,
        loading: true,
        items: {
          cities: [],
          state: [],
          countries: [],
        },
      },
    });
    return fetch(
      process.env.REACT_APP_API_HOST +
        "/home/getAllGeo?countryCode=" +
        countryCode
    )
      .then((response) => handleErrors(response))
      .then(
        (response) => response.json(),
        (error) => {
          dispatch({
            type: LOAD_GEO,
            data: {
              error: "Error in loading",
              loading: false,
              items: {
                cities: [],
                state: [],
                countries: [],
              },
            },
          });
          return Promise.reject();
        }
      )
      .then((json) => {
        dispatch({
          type: LOAD_GEO,
          data: {
            error: null,
            loading: false,
            items: {
              cities: json.cities,
              states: json.states,
              countries: json.countries,
            },
          },
        });
      });
  };
};

export const changeActiveDetailPane = (value) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_ACTIVE_DETAIL_PANE,
      activeDetailPane: value,
    });
  };
};

export const loadHomePageDataV2 = (geoValue, geoType) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_HOME_PAGE_DATA,
      data: {
        error: null,
        loading: true,
        data: null,
      },
    });

    return fetch(
      process.env.REACT_APP_API_HOST +
        "/home/v2/getHomePageData?geoValue=" +
        geoValue +
        "&geoType=" +
        geoType
    )
      .then((response) => handleErrors(response))
      .then(
        (response) => response.json(),
        (error) => {
          dispatch({
            type: LOAD_HOME_PAGE_DATA,
            data: {
              error: "Error in loading",
              loading: false,
              data: null,
            },
          });

          return Promise.reject();
        }
      )
      .then((json) => {
        dispatch({
          type: LOAD_HOME_PAGE_DATA,
          data: {
            error: null,
            loading: false,
            data: json,
          },
        });
      });
  };
};
export const loadQuickGameData = () => {
  return (dispatch) => {
    dispatch({
      type: LOAD_QUICK_GAME_DATA,
      data: {
        error: null,
        loading: true,
        data: null,
      },
    });

    return fetch(process.env.REACT_APP_API_HOST + "/home/fetchQuickGameData")
      .then((response) => handleErrors(response))
      .then(
        (response) => response.json(),
        (error) => {
          dispatch({
            type: LOAD_QUICK_GAME_DATA,
            data: {
              error: "Error in loading",
              loading: false,
              data: null,
            },
          });

          return Promise.reject();
        }
      )
      .then((json) => {
        dispatch({
          type: LOAD_QUICK_GAME_DATA,
          data: {
            error: null,
            loading: false,
            data: json,
          },
        });
      });
  };
};
