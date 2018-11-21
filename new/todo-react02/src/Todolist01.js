import React, { Component,Fragment } from 'react';
import TodoItem from "./Todoitem";
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
  // handleInputChange(e){
  //   const value =e.target.value;    //不这步会报错，异步操作
  //   this.setState(()=>({
  //       inputValue:value
  //   }))
  // }
  handleInputChange(){
    const value =this.input.value;    //不这步会报错，异步操作
    this.setState(()=>({
        inputValue:value
    }))
  }
  //新增li标签
  handelBtnClick(){
    this.setState((prevState)=>({
      list:[...prevState.list,prevState.inputValue],
      inputValue:""
    }))
  }
  //删除li标签
  handleItemDelete(index){
    this.setState((prevState)=>{
      const list=[...prevState.list]
      list.splice(index,1)
      return {list }
    })
  }
  //组件被挂载之前
  componentWillMount(){
    // console.log("componentWillMount")
  }
  componentDidMount(){
    // console.log("componentDidMount")
  }
  //组件被更新之前
  shouldComponentUpdate(){
    // console.log("shouldComponentUpdate")
    return true
  }
  //组件被更新之前，会自动执行，但是需要在shouldComponentUpdate之后执行
  //如果shouldComponentUpdate返回true才会执行
  //如果返回false，就不会被执行
  componentWillUpdate(){
    // console.log("componentWillUpdate")
  }
  //组件更新完成之后执行
  componentDidUpdate(){
    // console.log("componentDidUpdate")
  }
  render() {
    //页面由render函数渲染出来
    // console.log("render")
    return (
      <Fragment>
        <div>
          <input ref={(input)=>{this.input=input}} className="input" value={this.state.inputValue} onChange={this.handleInputChange}/>
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
