import addDataToStore from "./addDAta";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addDataToStore :addDataToStore
});

export default rootReducer;