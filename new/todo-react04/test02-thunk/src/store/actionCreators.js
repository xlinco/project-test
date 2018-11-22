import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST__ITEM} from "./actionTypes";
// import axios from "axios";   //异步请求调用

export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});
export const getAddItemAction=()=>({
    type:ADD_TODO_ITEM
});
export const getDeleteItemAction=(value)=>({
    type:DELETE_TODO_ITEM,
    value
});
export const initListAction=(data)=>({
    type:INIT_LIST__ITEM,
    data
});
//使用redux-thunk可以在actionCreatorse中return一个函数
export const getTodoList=()=>{
    return (dispatch)=>{
        setTimeout(()=>{
            const data=["hello","dell","lee"]
            const action = initListAction(data);
            dispatch(action);
            // console.log(data)
        },1000)
    }
}