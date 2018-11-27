import React,{PureComponent} from "react";
import home from "./home.css";
import Topic from "./components/topic";
import Writer from "./components/writer";
import Recommend from "./components/recommend";
import List from "./components/list";
import {connect} from "react-redux";
import {actionCreators} from "./store"

class Home extends PureComponent{
    handleScrollTop(){
        window.scrollTo(0,0);
    }
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
                {this.props.showScroll?<div className={home.backTop} onClick={this.handleScrollTop}>顶部</div>:null}
            </div>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.props.changeScrollTopShow)
    }
    bindEvents(){
        window.addEventListener("scroll",this.props.changeScrollTopShow)
    }
}
const mapState=(state)=>({
    showScroll:state.getIn(["home","showScroll"])
})
const mapDispatch=(dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>200){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapState,mapDispatch)(Home);