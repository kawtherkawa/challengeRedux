import { combineReducers } from "redux";
import listReducer from "./MovieList";

const rootReducer= combineReducers({listReducer})
export default rootReducer