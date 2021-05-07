import {combineReducers, createStore} from "redux";
import usersReducers from "./usersReducers";

let reducers = combineReducers({
    usersPage: usersReducers
});

let store = createStore(reducers);


export default store;