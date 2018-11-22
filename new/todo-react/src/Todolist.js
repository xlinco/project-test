import React ,{Component,Fragment} from "react";
import {connect} from "react-redux";


class TodoList extends Component{
    
    render(){
        return (
            <Fragment>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue.bind(this)}/>
                    <button>提交</button>
                    {/* <button onClick={this.handleClick.bind(this)}>提交</button> */}
                </div>
                <ul>
                    <li>dell</li>
                </ul>
            </Fragment>
        )
    }
}

// export default TodoList;
const mapStateToProps=(state)=>{
    return{
        inputValue:state.inputValue
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changeInputValue(e){
            const action={
                type:"change_input_value",
                value:e.target.value
            }
            // console.log(e.target.value)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);