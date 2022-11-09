import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { blogReducer } from "./blog/reducer";
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    blogs:blogReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));