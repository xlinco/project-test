import React,{Component} from "react";
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        const {DeleteItem,index} = this.props
        DeleteItem(index)
        this.props.DeleteItem(this.props.index)
    }
    render(){
        const {content}=this.props
        // console.log(this.props)
        return(
            <div onClick={this.handleClick}>{content}</div>
        )
    }
}
export default TodoItem;