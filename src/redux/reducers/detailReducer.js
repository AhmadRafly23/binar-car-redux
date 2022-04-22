import { ActionTypes } from "../constants/action-types";

const initialState = {
  detailCarLoading: false,
  detailCarResult: false,
  detailCarError: false,
};

export const detailReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DETAIL_CAR:
      return {
        ...state,
        detailCarLoading: action.payload.loading,
        detailCarResult: action.payload.data,
        detailCarError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
