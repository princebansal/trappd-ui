import { LOAD_HOME_PAGE_DATA, LOAD_GEO } from "./actionTypes";
import { apiConfig, handleErrors } from "../../../config";

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

    return fetch(apiConfig.host + "/home/getAllGeo?countryCode=" + countryCode)
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
      apiConfig.host +
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
