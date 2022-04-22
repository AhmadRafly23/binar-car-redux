import { ActionTypes } from "../constants/action-types";
const initialState = {
  setListCarLoading: false,
  setListCarResult: false,
  setListCarError: false,
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CARS:
      return {
        ...state,
        setListCarLoading: action.payload.loading,
        setListCarResult: action.payload.data,
        setListCarError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
