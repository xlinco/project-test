import React,{PureComponent} from "react";
import recommend from "./recommend.css";
import {connect} from "react-redux";

class Recommend extends PureComponent{
    render(){
        const {list} =this.props;
        return (
            <div className={recommend.recommendWrapper}>
                {list.map((item)=>{
                    return (
                        <div className={recommend.recommendItem} key={item.get("id")}>
                            <img  className={recommend.recommendPic} url={item.get("imgUrl")} alt=""/>
                        </div>
                    )
                })}

                {/* <div className={recommend.recommendItem}>
                    <img  className={recommend.recommendPic} url="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt=""/>
                </div>
                <div className={recommend.recommendItem}>
                    <img  className={recommend.recommendPic} url="http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt=""/>
                </div> */}
            </div>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(["home","recommendList"])
})
export default connect(mapState,null)(Recommend);