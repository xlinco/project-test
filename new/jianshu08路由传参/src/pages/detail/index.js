import React,{Component} from "react";
import detail from "./detail.css";
import { connect } from "react-redux";
import { actionCreators } from "../detail/store";

class Detail extends Component{
    render(){
        // console.log(this.props.title)
        // console.log(this.props.match.params.id)
        return (
            <div className={detail.detailWrapper}>
                <div className={detail.header}>{this.props.title}</div>
                <div className={detail.content} dangerouslySetInnerHTML={{__html:this.props.content}}></div>
                {/* <div className={detail.header}>秦始皇叫嬴政，为什么中国姓嬴的几乎没有？</div>
                <div className={detail.content}>
                    <img className={detail.detailPic} src="//upload-images.jianshu.io/upload_images/11026357-42968463245de2bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" alt=""/>
                    <p className={detail.p}><b className={detail.b}>秦始皇是中国第一位大一统的人，</b>他建立了皇帝制度，被后人称为千古一帝。</p>
                    <p className={detail.p}>按照姓氏，他的后代应该很多，并且姓赢的也会传承至今。但事实是中国如今，姓赢的寥寥无几，如果没有秦始皇的威名，人们可能早就忘记还有这个姓氏。</p>
                    <p className={detail.p}>古书记载，秦始皇的出生至今是个谜，然而秦始皇到底姓啥。大多数认为嬴政是他的姓氏，也有人认为他出生在赵国，应该是赵政。接下来就说说他们那个时期的姓氏代表着什么？为何嬴姓没有被传承至今。</p>
                </div> */}
            </div>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState=(state)=>({
    title:state.getIn(["detail","title"]),
    content:state.getIn(["detail","content"])
})
const mapDispatch=(dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})
export default connect(mapState,mapDispatch)(Detail);