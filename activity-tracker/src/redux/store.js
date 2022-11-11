import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { blogReducer } from "./blog/reducer";
import thunk from 'redux-thunk';
import { authReducer } from "./auth/authReducer";
const rootReducer = combineReducers({
    blogs:blogReducer,
    auth: authReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));