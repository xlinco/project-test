import React, { PureComponent } from "react";
import liststyle from "./list.css";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import {Link} from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list,getMoreList,page } = this.props;
    return (
      <div>
          {list.map((item,index) => {
          return (
            <Link to={"/detail/"+item.get("id")} key={index}>
              <div className={liststyle.listItem}> 
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
            </Link>
            
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
