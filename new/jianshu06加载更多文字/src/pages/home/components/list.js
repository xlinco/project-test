import React, { Component } from "react";
import liststyle from "./list.css";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class List extends Component {
  render() {
    const { list,getMoreList,page } = this.props;
    return (
      <div>
          {list.map((item,index) => {
        {/* {list.map((item,index) => { */}
          return (
            // <div className={liststyle.listItem} key={item.get("id")}>
            <div className={liststyle.listItem} key={index}> 
              <img
                className={liststyle.listPic}
                src={item.get("imgUrl")}
                alt=""
              />
              <div className={liststyle.listInfo}>
                <h3 className={liststyle.listTitle}>{item.get("title")}</h3>
                <p className={liststyle.listDesc}>{item.get("desc")}</p>
              </div>
            </div>
          );
        })}
        <div className={liststyle.loadMore} onClick={()=>getMoreList(page)}>
          更多文字
        </div>
      </div>
    );
  }
}
const mapState = state => ({
  list: state.getIn(["home", "articleList"]),
  page:state.getIn(["home","articlePage"])
});
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});
export default connect(
  mapState,
  mapDispatch
)(List);
