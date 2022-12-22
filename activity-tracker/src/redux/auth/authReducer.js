import { login, logout } from "./authType";

const initState = "";

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