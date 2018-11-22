import React, { Component,Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input ,Button ,List} from 'antd';
import store from "./store";    //引入store
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from "./store/actionTypes"

class Todolist extends Component {

  constructor(props){
    super(props);
    this.state=store.getState()
    // console.log(this.state);
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleStoreChange=this.handleStoreChange.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);   //store发生变化时，执行该函数
  }
  
  render(){
    return (
      <Fragment>
        <div style={{marginTop:10,marginLeft:10}}>
        <Input
          onChange={this.handleInputChange}
          value={this.state.inputValue}
          placeholder="hello"
          style={{width:300,marginRight:10}}
        />
        <Button
          onClick={this.handleBtnClick}
          type="primary">按钮</Button>
        <List
          style={{marginTop:10,width:300}}
          bordered
          dataSource={this.state.list}
          // dataSource={[]}
          renderItem={(item,index) => (
            <List.Item onClick={this.handleItemDelete.bind(this,index)}>
              {item}
            </List.Item>
          )}
        />
        </div>
        
      </Fragment>
    )
  }
  handleInputChange(e){
    const action={
      type:CHANGE_INPUT_VALUE,
      value:e.target.value
    }
    store.dispatch(action);
    // console.log(e.target.value)
  }
  handleStoreChange(){
    this.setState(store.getState());
    // console.log("StoreChange");
  }
  handleBtnClick(){
    const action={
      type:ADD_TODO_ITEM,
    }
    store.dispatch(action)
  }
  handleItemDelete(index){
    const action={
      type:DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action);
    console.log(index)
  }
}

export default Todolist;
