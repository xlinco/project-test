import React, { Component,Fragment } from 'react';
import TodoItem from "./Todoitem";
import Test from "./Test06"
import "./style.css";

class Todolist extends Component {
  constructor(props){
    super(props);
    //当组件的state或者props发生改变的时候，render函数就会执行
    this.state={
      inputValue:"",
      list:["3","5","1"]
    };
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handelBtnClick=this.handelBtnClick.bind(this);
    this.handleItemDelete=this.handleItemDelete.bind(this)
  }
  handleInputChange(e){
    // console.log(e.target.value)
    // this.setState({
    //   inputValue:e.target.value
    // })
    const value =e.target.value;    //不这步会报错，异步操作
    this.setState(()=>({
        inputValue:value
    }))
  }
  //新增li标签
  handelBtnClick(){
    // this.setState({
    //   list:[...this.state.list,this.state.inputValue],
    //   inputValue:""
    // })

    this.setState((prevState)=>({
      list:[...prevState.list,prevState.inputValue],
      inputValue:""
    }))
  }
  //删除li标签
  handleItemDelete(index){
    //immutable
    //state不允许我们做任何的改变，但可以对拷贝的副本进行操作
    // const list=[...this.state.list];    //将state数组进行一份拷贝
    // list.splice(index,1)
    // this.setState({
    //   // list:list
    //   list    //es6语法
    // })
    this.setState((prevState)=>{
      const list=[...prevState.list]
      list.splice(index,1)
      return {list }
    })
  }
  render() {
    //页面由render函数渲染出来
    // console.log("render")
    return (
      //jsx的语法块
      //Fragment是一个组件
      //注释{/* */}  或者用单行注释//
      <Fragment>
        <div>
          <input className="input" value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handelBtnClick}>提交</button>
        </div>
        <ul>
          {/* {this.state.list.map((item,index)=>{
            return (
              <div>
                <TodoItem content={item} index={index} DeleteItem={this.handleItemDelete}/>
              </div>
            )
          })} */}
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputValue}/>
      </Fragment>
    );
  }
  getTodoItem(){
    return (
      this.state.list.map((item,index)=>{
        return (
            <TodoItem key={index} content={item} index={index} DeleteItem={this.handleItemDelete}/>
        )
      })
    )
  }
}

export default Todolist;
