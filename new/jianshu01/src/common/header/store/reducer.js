import * as actionTypes from "./constants";
import {fromJS} from "immutable";

const defaultState =fromJS({
    focused:false,
    list:[]
});
export default (state=defaultState,action) => {
    if(action.type===actionTypes.SEARCH_FOCUS){
        return state.set("focused",true)
        // return {
        //     focused:true
        // }
    }
    if(action.type===actionTypes.SEARCH_BLUR){
        return state.set("focused",false)
        // return {
        //     focused:false
        // }
    }
    return state;
}