const defaultState={
    inputValue:"123",
    list:[1,2,3]
}

//reducer能够接受state，但是绝不能修改state,所以需要拷贝成
export default (state=defaultState,action)=>{
    if(action.type==="change_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;    //newState实际返回给了store
    }
    if(action.type==="add_todo_item"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue="";
        // console.log(newState)
        return newState;    //newState实际返回给了store
    }
    // console.log(state,action)
    return state    //state里面存放的是所有store仓库里所有数据
}