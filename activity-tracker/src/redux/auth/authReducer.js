import { login, logout } from "./authType";

const initState = "";

// let authData = JSON.parse(localStorage.getItem("firebaseauth"))||"";

export const authReducer = (state = initState, {type, payload}) => {
    switch(type){
        case login: {
            localStorage.setItem("firebaseauth", JSON.stringify(payload));
            return payload;
        } 
        case logout:
            {
                localStorage.setItem("firebaseauth", JSON.stringify(""));
                return "";
            }
        default: return state;
    }
}