import React,{Component} from "react";
import detail from "./detail.css";
import { connect } from "react-redux";
import { actionCreators } from "../detail/store";
import {withRouter} from "react-router-dom"

class Detail extends Component{
    render(){
        // console.log(this.props.title)
        // console.log(this.props.match.params.id)
        return (
            <div className={detail.detailWrapper}>
                <div className={detail.header}>{this.props.title}</div>
                <div className={detail.content} dangerouslySetInnerHTML={{__html:this.props.content}}></div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
};
const mapState=(state)=>({
    title:state.getIn(["detail","title"]),
    content:state.getIn(["detail","content"])
});
const mapDispatch=(dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
});
export default connect(mapState,mapDispatch)(withRouter(Detail));