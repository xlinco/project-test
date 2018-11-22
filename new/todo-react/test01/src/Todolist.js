//容器组件，只负责业务逻辑
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from "./store";    //引入store
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,initListAction} from "./store/actionCreators";
import TodoListUI from "./TodolistUI";
// import axios from "axios";   //异步请求调用

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state=store.getState()
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleStoreChange=this.handleStoreChange.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);   //store发生变化时，执行该函数
    this.handleItemDelete=this.handleItemDelete.bind(this);
  }
  
  render(){
    return <TodoListUI
              inputValue={this.state.inputValue}
              handleInputChange={this.handleInputChange}
              handleBtnClick={this.handleBtnClick}
              list={this.state.list}
              handleItemDelete={this.handleItemDelete}
          />
  }
  componentDidMount(){
    setTimeout(()=>{
      const data=["hello","dell","lee"]
      // return console.log(data)
      const action = initListAction(data);
      // console.log(action)
      store.dispatch(action);
    },1000)
  }
  handleInputChange(e){
    const action=getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange(){
    this.setState(store.getState());
  }
  handleBtnClick(){
    const action=getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index){
    const action=getDeleteItemAction(index)
    store.dispatch(action);
  }
}

export default Todolist;
