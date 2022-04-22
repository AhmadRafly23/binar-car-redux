import { combineReducers } from "redux";
import { carsReducer } from "./carsReducer";
import { detailReducers } from "./detailReducer";
import { filterReducer } from "./filterReducer";

const reducers = combineReducers({
  allCars: carsReducer,
  filterData: filterReducer,
  detailCars: detailReducers,
});

export default reducers;
