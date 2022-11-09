import { getBlogError, getBlogLoading, getBlogSuccess } from "./type";

const initialState = {
    blogs:[],
    loading:false,
    error:false
}

const blogReducer = (state=initialState,{type,payload})=>{
    switch(type){
      case getBlogLoading:{
        
        return {
            ...state,
            loading:true,
            error:false,
          }
     }
       

      case getBlogSuccess:{
        return {
            ...state,
            loading:false,
            error:false,
            blogs:payload
          }
       }
       case getBlogError :{
        return {
            ...state,
            loading:false,
            error:true,
          }
        }
      default:{
        return state;
      }
    }
}

export {blogReducer};