import React,{Component} from "react";

class Test extends Component{
    render(){
        //当父组件的render函数被运行时，它的子组件的函数都将被重新运行 
        // console.log("test")
        return <div>{this.props.content}</div>
    }
}

export default Test;