import { lsChangeAr, lsChangeDp, lsChangeTT } from "./actype";
const iState = {
    arrival: {},
    departure: {},
    totalTime: 0
}

export const lsReducer = (state = iState, {type, payload}) => {
    switch(type){
        case lsChangeAr: {
            return{
               ...state,
               arrival: payload  
            }
        }

        case lsChangeDp: {
            return{
               ...state,
               departure: payload  
            }
        }

        case lsChangeTT: {
            return{
               ...state,
               totalTime: payload  
            }
        }

        default: return state;
    }
}