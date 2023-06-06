import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { TodoReducer } from "./TodoReducer";

const reducer = combineReducers({ Todo: TodoReducer });
const initialState = {};
export const store = createStore(reducer, initialState, applyMiddleware(thunk));
