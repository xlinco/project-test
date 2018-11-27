import React,{PureComponent} from "react";
import loginstyle from "./login.css";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Redirect} from "react-router-dom";

class Login extends PureComponent{
    render(){
        // console.log(loginStatus)
        const {loginStatus} =this.props;
        if(!loginStatus){
            return (
                <div className={loginstyle.loginWrapper}>
                    <div className={loginstyle.loginBox}>
                        <input className={loginstyle.loginInput} placeholder="账号" ref={(input)=>{this.account=input}} />
                        <input className={loginstyle.loginInput}  placeholder="密码" type="password" ref={(input)=>{this.password=input}} />
                        <div className={loginstyle.loginButton} onClick={()=>this.props.login(this.account,this.password)}>登录</div>
                    </div>
                </div>
            )
        }else{
            return <Redirect to="/" />
        }
        // return (
        //     <div className={loginstyle.loginWrapper}>
        //         <div className={loginstyle.loginBox}>
        //             <input className={loginstyle.loginInput} placeholder="账号" ref={(input)=>{this.account=input}} />
        //             <input className={loginstyle.loginInput}  placeholder="密码" type="password" ref={(input)=>{this.password=input}} />
        //             <div className={loginstyle.loginButton} onClick={()=>this.props.login(this.account,this.password)}>登录</div>
        //         </div>
        //     </div>
        // )
    }
}
const mapState=(state)=>({
    loginStatus:state.getIn(["login","login"])
})
const mapDispatch=(dispatch)=>({
    login(accountElem,passwordElem){
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
        // console.log(accountElem.value,passwordElem.value)
    }
    
})
export default connect(mapState,mapDispatch)(Login);