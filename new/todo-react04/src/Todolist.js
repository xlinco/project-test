import React ,{Fragment} from "react";
import {connect} from "react-redux";
import {getInputChangeAction,getAddAction,getDeleteAction} from "./store/actionCreators";

//无状态组件
const TodoList=(props)=>{
    const {inputValue,changeInputValue,handleClick,list,handleDelete}=props
        return (
            <Fragment>
                <div>
                    <input value={inputValue} onChange={changeInputValue}/>
                    {/* <button>提交</button> */}
                    <button onClick={handleClick}>提交</button>
                </div>
                <ul>
                    {list.map((item,index)=>{
                        // return <li onClick={handleDelete} key={index}>{item}</li>
                        return <li onClick={()=>{handleDelete(index)}} key={index}>{item}</li>
                    })}
                </ul>
            </Fragment>
        )
}

// class TodoList extends Component{
    
//     render(){
//         const {inputValue,changeInputValue,handleClick,list,handleDelete}=this.props
//         return (
//             <Fragment>
//                 <div>
//                     <input value={inputValue} onChange={changeInputValue.bind(this)}/>
//                     {/* <button>提交</button> */}
//                     <button onClick={handleClick}>提交</button>
//                 </div>
//                 <ul>
//                     {list.map((item,index)=>{
//                         return <li onClick={handleDelete} key={index}>{item}</li>
//                     })}
//                 </ul>
//             </Fragment>
//         )
//     }
// }

// export default TodoList;


const mapStateToProps=(state)=>{
    return{
        inputValue:state.inputValue,
        list:state.list
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changeInputValue(e){
            const action=getInputChangeAction(e.target.value)
            dispatch(action)
        },
        handleClick(){
            const action=getAddAction();
            dispatch(action)
        },
        handleDelete(index){
            // console.log(index)
            const action=getDeleteAction(index);
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);