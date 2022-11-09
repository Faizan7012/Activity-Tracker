import { getBlogSuccess,getBlogError,getBlogLoading } from "./type";
  export const getBlogsuccess = (payload)=>{
   return {
    type:getBlogSuccess,
    payload,
   }
  }

export const getBlogloading = ()=>{
      return {
        type:getBlogLoading
      }
}
export const getBlogerror = ()=>{
    return {
      type:getBlogError
    }
}