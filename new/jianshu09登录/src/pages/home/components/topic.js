import React,{PureComponent} from "react";
import {connect} from "react-redux";
import topic from "./topic.css";

class Topic extends PureComponent{
    render(){
        const {list}=this.props
        return (
            <div>
                <div className={topic.topicWrapper}>
                {
                    list.map((item)=>(
                            <div  className={topic.topicItem} key={item.get("id")}>
                            <img   className={topic.topicPic}
                            src={item.get("imgUrl")} alt="120" />
                            {item.get("title")}
                        </div>
                    ))
                }
            </div>
            </div>
            
        )
    }
}
const mapState=(state)=>({
    // list:state.get("home").get("topicList")
    list:state.getIn(["home","topicList"])
})
export default connect(mapState,null)(Topic);