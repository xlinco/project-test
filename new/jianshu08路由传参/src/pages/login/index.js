import React,{PureComponent} from "react";
import login from "./login.css";
import { connect } from "react-redux";
// import { actionCreators } from "../detail/store";

class Login extends PureComponent{
    render(){
        return (
            <div className={login.loginWrapper}>
                <div className={login.loginBox}>
                    <input className={login.loginInput} placeholder="账号" />
                    <input className={login.loginInput}  placeholder="密码" />
                    <div className={login.loginButton}>登录</div>
                </div>
            </div>
        )
    }
}
const mapState=(state)=>({
    
    
})
const mapDispatch=(dispatch)=>({
    
    
})
export default connect(mapState,mapDispatch)(Login);