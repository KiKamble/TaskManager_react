import { combineReducers } from "redux";
import { taskReducers } from "./TaskReducers";

export default combineReducers({
    tasks: taskReducers,
    user: () => null
})