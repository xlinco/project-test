import React,{Component} from "react";
import home from "./home.css";
import Topic from "./components/topic";
import Writer from "./components/writer";
import Recommend from "./components/recommend";
import List from "./components/list";
// import axios from "axios";
import {connect} from "react-redux";
import {actionCreators} from "./store"

class Home extends Component{
    render(){
        return (
            <div className={home.homeWrapper}>
                <div className={home.homeLeft}>
                <img  className={home.bannerImg}src="//upload.jianshu.io/admin_banners/web_images/4581/8cfb95afa4ac98683ce1b9ab0f835f425e6a7df5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                <Topic />
                <List/>
                </div>
                <div className={home.homeRight}>
                    <Recommend/>
                    <Writer/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        // axios.get("/api/home.json").then((res)=>{
        //     const result =res.data.data;
        //     const action={
        //         type:"change_home_data",
        //         topicList:result.topicList,
        //         articleList:result.articleList,
        //         recommendList:result.recommendList
        //     }
        //     this.props.changeHomeData(action);
        // })
        this.props.changeHomeData();
    }
}
const mapDispatch=(dispatch)=>({
    changeHomeData(){
        // axios.get("/api/home.json").then((res)=>{
        //     const result =res.data.data;
        //     const action={
        //         type:"change_home_data",
        //         topicList:result.topicList,
        //         articleList:result.articleList,
        //         recommendList:result.recommendList
        //     }
        //     dispatch(action);
        // })
        // const action=actionCreators.getHomeInfo();
        dispatch(actionCreators.getHomeInfo())
    }
})
export default connect(null,mapDispatch)(Home);