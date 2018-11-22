import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM} from "./actionTypes"
export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const getAddAction=()=>({
    type:ADD_ITEM
})
export const getDeleteAction=(index)=>({
    type:DELETE_ITEM,
    index
})