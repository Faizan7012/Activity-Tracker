import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { blogReducer } from "./blog/reducer";
import thunk from 'redux-thunk';
import { authReducer } from "./Auth/auth.reducer";
import { lsReducer } from "./desktime/red";

const rootReducer = combineReducers({
    blogs:blogReducer,
    auth: authReducer,
    ls: lsReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));