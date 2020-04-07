import { LOAD_CITIES, LOAD_HOME_PAGE_DATA } from "./actionTypes";
import { apiConfig, handleErrors } from "../../../config";

export const loadCities = (countryCode) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_CITIES,
      data: {
        error: null,
        loading: true,
        items: [],
      },
    });

    return fetch(
      apiConfig.host + "/home/getAllCities?countryCode=" + countryCode
    )
      .then((response) => handleErrors(response))
      .then(
        (response) => response.json(),
        (error) => {
          console.log("An error occurred.", error);
          dispatch({
            type: LOAD_CITIES,
            data: {
              error: "Error in loading",
              loading: false,
              items: [],
            },
          });
          return Promise.reject();
        }
      )
      .then((json) => {
        console.log("Response: ", json);
        dispatch({
          type: LOAD_CITIES,
          data: {
            error: null,
            loading: false,
            items: json.cities,
          },
        });
      });
  };
};
export const loadHomePageData = (cityCode, countryCode) => {
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
        "/home/getHomePageData?cityCode=" +
        cityCode +
        "&countryCode=" +
        countryCode
    )
      .then((response) => handleErrors(response))
      .then(
        (response) => response.json(),
        (error) => {
          console.log("An error occurred.", error);
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
        console.log("Response: ", json);
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
