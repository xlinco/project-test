import React, { Component,Fragment } from 'react';

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:"",
      list:[]
    }
  }
  handleInputChange(e){
    console.log(e.target.value)
    this.setState({
      inputValue:e.target.value
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button>提交</button>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
