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
    //当一个组件从父组件接收参数
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    //只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
    componentWillReceiveProps(){
        console.log("child componentWillReceiveProps")
    }
    //当这个组件即将被从页面中剔除的时候被执行
    componentWillUnmount(){
        console.log("child componentWillUnmount")
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