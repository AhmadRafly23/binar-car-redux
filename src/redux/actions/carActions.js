import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const setCars = (data) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_CARS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    if (data === "null") {
      axios({
        method: "GET",
        url: "https://my-json-server.typicode.com/AhmadRafly23/db-car/cars",
      })
        .then((response) => {
          dispatch({
            type: ActionTypes.SET_CARS,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: ActionTypes.SET_CARS,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    } else {
      axios({
        method: "GET",
        url:
          "https://my-json-server.typicode.com/AhmadRafly23/db-car/cars?status=" +
          data,
      })
        .then((response) => {
          dispatch({
            type: ActionTypes.SET_CARS,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: ActionTypes.SET_CARS,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    }
  };
};

export const detailCar = (id) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.DETAIL_CAR,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "https://my-json-server.typicode.com/AhmadRafly23/db-car/cars/" + id,
    })
      .then((response) => {
        dispatch({
          type: ActionTypes.DETAIL_CAR,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.DETAIL_CAR,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const filterData = (data) => {
  return {
    type: ActionTypes.FILTER_DATA,
    payload: { data },
  };
};
