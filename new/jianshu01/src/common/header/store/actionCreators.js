import * as actionTypes from "./constants";
import axios from "axios";

export const searchFocus=()=>({
    type:actionTypes.SEARCH_FOCUS
})
export const searchBlur=()=>({
    type:actionTypes.SEARCH_BLUR
})
export const getList=()=>{
    return (dispatch)=>{
        setTimeout(() => {
            axios.get("./api/headerList.json").then((res)=>{

            }).catch(()=>{
                console.log("error")
            })
            // const res=[]
        }, 2000);
    }
}