import React, { Component,Fragment } from 'react';

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:"",
      list:[3,5,1]
    }
  }
  handleInputChange(e){
    // console.log(e.target.value)
    this.setState({
      inputValue:e.target.value
    })
  }
  //新增li标签
  handelBtnClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:""
    })
  }
  //删除li标签
  handleItemDelete(index){
    //immutable
    //state不允许我们做任何的改变，但可以对拷贝的副本进行操作
    const list=[...this.state.list];    //将state数组进行一份拷贝
    list.splice(index,1)
    this.setState({
      // list:list
      list    //es6语法
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handelBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item,index)=>{
            // return <li>{item}</li>    报错，使用map做循环渲染，需要给每一项增加key值，以下解决报错
            // return <li key={index}>{item}</li>
            //删除li标签
            return <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
