import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SIGNIN_SUCCESS } from "./auth.types";
import axios from 'axios';
const host = 'https://upset-teal-duck.cyclic.app';
export const loginAPI = (data) => async (dispatch) => {
   
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${host}/user/login`, data);
        dispatch({ type: AUTH_SIGNIN_SUCCESS, token: res.data});
        localStorage.setItem('ACTIVITYTRACKER',JSON.stringify(res.data));

        return res.data;
    }
    catch (e) {
        dispatch({ type: AUTH_ERROR })
        return e.response.data;
    }
}
export const signupAPI = (data) => async (dispatch) => {
    try {
        let res = await axios.post(`${host}/user/signup`, data);
        return res.data;
    }
    catch (e) {
        dispatch({ type: AUTH_ERROR });
        return e.response.data;
    }
}
export const logoutAPI = () => {
    localStorage.removeItem("ACTIVITYTRACKER")
    return {type:AUTH_LOGOUT}
}
