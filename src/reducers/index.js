import { combineReducers } from "redux";

import counterReducer from "./Counter";

import userReducer from "./User";


const my_reducers =  combineReducers({
  counter : counterReducer,
  user    : userReducer
})

export default my_reducers