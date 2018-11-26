import React,{Component} from "react";
import liststyle from "./list.css";
import {connect} from "react-redux";

class List extends Component{
    render(){
        const {list} =this.props;
        return (
            <div>
                {list.map((item)=>{
                    return (
                        <div className={liststyle.listItem} key={item.get("id")}>
                            <img className={liststyle.listPic} src={item.get("imgUrl")} alt="" />
                            <div className={liststyle.listInfo}>
                                <h3 className={liststyle.listTitle}>{item.get("title")}</h3>
                                <p className={liststyle.listDesc}>{item.get("desc")}</p>
                            </div>
                        </div>
                    )
                })}
                {/* <div className={liststyle.listItem}>
                    <img className={liststyle.listPic}src="//upload-images.jianshu.io/upload_images/12885000-fa6bed078efe35cf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" />
                    <div className={liststyle.listInfo}>
                        <h3 className={liststyle.listTitle}>换季了，又该买买买了</h3>
                        <p className={liststyle.listDesc}>秋风渐起，天气转凉，衣柜也要换季大清理了，很多衣服当初买回来时欢天喜地，现在却再也找不到心动的感觉，需要果干的来个断舍离。 每天出门时，望着堆积...</p>
                    </div>
                </div> */}
                {/* <div className={liststyle.listItem}>
                    <img className={liststyle.listPic}src="//upload-images.jianshu.io/upload_images/12885000-fa6bed078efe35cf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" />
                    <div className={liststyle.listInfo}>
                        <h3 className={liststyle.listTitle}>换季了，又该买买买了</h3>
                        <p className={liststyle.listDesc}>秋风渐起，天气转凉，衣柜也要换季大清理了，很多衣服当初买回来时欢天喜地，现在却再也找不到心动的感觉，需要果干的来个断舍离。
                        每天出门时，望着堆积如山的衣橱，两眼一片茫然，总是像选妃一样，挑来选去，不知道该选谁，虽然柜子里挂的满满当当的，受宠的却只有那么几件。</p>
                    </div>
                </div>
                <div className={liststyle.listItem}>
                    <img className={liststyle.listPic}src="//upload-images.jianshu.io/upload_images/12885000-fa6bed078efe35cf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" />
                    <div className={liststyle.listInfo}>
                        <h3 className={liststyle.listTitle}>换季了，又该买买买了</h3>
                        <p className={liststyle.listDesc}>秋风渐起，天气转凉，衣柜也要换季大清理了，很多衣服当初买回来时欢天喜地，现在却再也找不到心动的感觉，需要果干的来个断舍离。
                        每天出门时，望着堆积如山的衣橱，两眼一片茫然，总是像选妃一样，挑来选去，不知道该选谁，虽然柜子里挂的满满当当的，受宠的却只有那么几件。</p>
                    </div>
                </div> */}
            </div>
            
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(["home","articleList"])
})
export default connect(mapState,null)(List);