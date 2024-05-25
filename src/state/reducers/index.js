import { combineReducers } from "redux";
import reducer from "./userReducers"

const reducers=combineReducers({
    user:reducer
})

export default reducers