import { ActionTypes } from "../constants/action-types";

const initialState = {
  data: null,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FILTER_DATA:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};
