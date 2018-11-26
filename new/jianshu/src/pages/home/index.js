import React,{Component} from "react";
import home from "./home.css";
import Topic from "./components/topic";
import Writer from "./components/writer";
import Recommend from "./components/recommend";
import List from "./components/list";

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
}
export default Home;