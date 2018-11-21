import React,{Component} from "react";
import PropTypes from "prop-types";

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
        const {content,test}=this.props
        return(
            <div onClick={this.handleClick}>
            {test}-{content}
            </div>
        )
        // return React.createElement("div",{},"item")
    }
}
//限制要求父组件传值的类型
TodoItem.propTypes={
    // content:PropTypes.string,
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func,
    index:PropTypes.number,
    // test:PropTypes.string    //不传值不报错
    test:PropTypes.string.isRequired    //不传值报错
}
//解决报错，定义默认值
TodoItem.defaultProps={
    test:"hello"
}
export default TodoItem;