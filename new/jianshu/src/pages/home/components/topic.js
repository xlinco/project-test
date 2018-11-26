import React,{Component} from "react";
import {connect} from "react-redux";
import topic from "./topic.css";

class Topic extends Component{
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
                {/* <div  className={topic.topicItem}>
                    <img   className={topic.topicPic}
                    src="//upload-images.jianshu.io/upload_images/8635253-071e138c2cbfbcbc?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120" />
                社会热点
                </div>
                <div  className={topic.topicItem}>
                    <img   className={topic.topicPic}
                    src="//upload-images.jianshu.io/upload_images/8635253-071e138c2cbfbcbc?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120" />
                社会热点</div>
                <div  className={topic.topicItem}>
                    <img   className={topic.topicPic}
                    src="//upload-images.jianshu.io/upload_images/8635253-071e138c2cbfbcbc?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120" />
                社会热点</div>
                <div  className={topic.topicItem}>
                    <img   className={topic.topicPic}
                    src="//upload-images.jianshu.io/upload_images/8635253-071e138c2cbfbcbc?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120" />
                社会热点</div>
                <div  className={topic.topicItem}>
                    <img   className={topic.topicPic}
                    src="//upload-images.jianshu.io/upload_images/8635253-071e138c2cbfbcbc?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120" />
                社会热点</div>
                <div  className={topic.topicItem}>
                    <img   className={topic.topicPic}
                    src="//upload-images.jianshu.io/upload_images/8635253-071e138c2cbfbcbc?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120" />
                社会热点</div> */}
            </div>
            </div>
            
        )
    }
}
const mapState=(state)=>({
    list:state.get("home").get("topicList")
})
export default connect(mapState,null)(Topic);