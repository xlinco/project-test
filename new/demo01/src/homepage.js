import React, { Component ,Fragment} from 'react';
import store from "./store";    //引入store
// import { connect } from 'react-redux'
import {getDeleteItemAction} from "./store/actionCreators"


class HomePage extends Component{
    constructor(props){
        super(props);
        // this.state=store.getState();
        this.handleStoreChange=this.handleStoreChange.bind(this);//把数据提交给store
        store.subscribe(this.handleStoreChange);   //store发生变化时，执行该函数
    }
    componentDidMount(){
        console.log(this.props)
    }

    getTodoItem(){
        const state = store.getState();
        return (state.list.map((item,index)=>{
            return (
                <li key={index} 
                onClick={this.handleItemDelete.bind(this,index)}
                >
                    <p>姓名：{item.name}</p>
                    <p>性别：{item.gender}</p>
                    <p>年龄：{item.age}</p>
                    <p>爱好：{item.hobby}</p>
                </li>
            )
        }))
    }
    handleItemDelete(index){
        const action=getDeleteItemAction(index)
        store.dispatch(action);
    }


    render(){
        return(
            <Fragment>
                <div>
                    个人信息
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    handleStoreChange(){
        this.setState(store.getState());
    }
}

// export default connect()(HomePage)
export default HomePage;

