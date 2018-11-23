import React,{Component,Fragment} from "react";
import header from "./header.css";

class Header extends Component{
    render(){
        // console.log(header)
        return ( 
            <Fragment>
                {/* <div className="header">shoye</div> */}
                <div className={header.header}>
                    <a className={header.logo} href="http://localhost:3000"></a>
                    <div className={header.nav}>
                        <div className={header.navItem+" "+header.left+" "+header.active}>首页</div>
                        <div className={header.navItem+" "+header.left}>下载App</div>
                        <div className={header.navItem+" "+header.right}>登录</div>
                        <div className={header.navItem+" "+header.right}>Aa</div>
                        <input className={header.navSearch} placeholder="搜索"/> 
                    </div>
                    <div className={header.addition}>
                        <button className={header.btn+" "+header.writting}>写文章</button>
                        <button className={header.btn+" "+header.reg}>注册</button>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Header;