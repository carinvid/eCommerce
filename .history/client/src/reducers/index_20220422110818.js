import { combineReducers } from "redux";
import { userReducer } from "./userReducer"

const rootReduce = combineReducers({
    user: reducer,
})

export default rootReduce;