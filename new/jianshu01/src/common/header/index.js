import React, { Component } from "react";
import header from "./header.css";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Header extends Component {
  getListArea = show => {
    if (show) {
      return (
        <div className={header.searchInfo}>
          <div className={header.searchInfoTitle}>
            <span className={header.searchInfoTSwitch}>换一批</span>
            热门搜索
          </div>
          <div className={header.searchInfoList}>
            <a className={header.searchInfoItem}>教育</a>
            <a className={header.searchInfoItem}>简书</a>
            <a className={header.searchInfoItem}>历史</a>
            <a className={header.searchInfoItem}>考研</a>
            <a className={header.searchInfoItem}>生活</a>
            <a className={header.searchInfoItem}>微信小程序</a>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  render() {
    return (
      <div className={header.header}>
        <a className={header.logo} href="http://localhost:3000" />
        <div className={header.nav}>
          <div
            className={header.navItem + " " + header.left + " " + header.active}
          >
            首页
          </div>
          <div className={header.navItem + " " + header.left}>下载App</div>
          <div className={header.navItem + " " + header.right}>登录</div>
          <div className={header.navItem + " " + header.right}>
            <i className="iconfont">&#xe636;</i>
          </div>
          <div className={header.searchWrapper}>
            <input
              className={this.props.focused ? header.focused : header.navSearch}
              placeholder="搜索"
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur}
            />
            <i className="iconfont">&#xe60b;</i>
            {this.getListArea(this.props.focused)}
          </div>
        </div>
        <div className={header.addition}>
          <button className={header.btn + " " + header.writting}>
            <i className="iconfont">&#xe615;</i>写文章
          </button>
          <button className={header.btn + " " + header.reg}>注册</button>
        </div>
      </div>
    );
  }
}

// const getListArea = show => {
//   if (show) {
//     return (
//       <div className={header.searchInfo}>
//         <div className={header.searchInfoTitle}>
//           <span className={header.searchInfoTSwitch}>换一批</span>
//           热门搜索
//         </div>
//         <div className={header.searchInfoList}>
//           <a className={header.searchInfoItem}>教育</a>
//           <a className={header.searchInfoItem}>简书</a>
//           <a className={header.searchInfoItem}>历史</a>
//           <a className={header.searchInfoItem}>考研</a>
//           <a className={header.searchInfoItem}>生活</a>
//           <a className={header.searchInfoItem}>微信小程序</a>
//         </div>
//       </div>
//     );
//   } else {
//     return null;
//   }
// };

// const Header = props => {
//   return (
//     <div className={header.header}>
//       <a className={header.logo} href="http://localhost:3000" />
//       <div className={header.nav}>
//         <div
//           className={header.navItem + " " + header.left + " " + header.active}
//         >
//           首页
//         </div>
//         <div className={header.navItem + " " + header.left}>下载App</div>
//         <div className={header.navItem + " " + header.right}>登录</div>
//         <div className={header.navItem + " " + header.right}>
//           <i className="iconfont">&#xe636;</i>
//         </div>
//         <div className={header.searchWrapper}>
//           <input
//             className={props.focused ? header.focused : header.navSearch}
//             placeholder="搜索"
//             onFocus={props.handleInputFocus}
//             onBlur={props.handleInputBlur}
//           />
//           <i className="iconfont">&#xe60b;</i>
//           {/* <div className={header.searchInfo}>
//                 <div className={header.searchInfoTitle}>
//                   <span className={header.searchInfoTSwitch}>换一批</span>
//                   热门搜索
//                 </div>
//                 <div className={header.searchInfoList}>
//                   <a className={header.searchInfoItem}>教育</a>
//                   <a className={header.searchInfoItem}>简书</a>
//                   <a className={header.searchInfoItem}>历史</a>
//                   <a className={header.searchInfoItem}>考研</a>
//                   <a className={header.searchInfoItem}>生活</a>
//                   <a className={header.searchInfoItem}>微信小程序</a>
//                 </div>
//               </div> */}
//           {getListArea(props.focused)}
//         </div>
//       </div>
//       <div className={header.addition}>
//         <button className={header.btn + " " + header.writting}>
//           <i className="iconfont">&#xe615;</i>写文章
//         </button>
//         <button className={header.btn + " " + header.reg}>注册</button>
//       </div>
//     </div>
//   );
// };
const mapStateToProps = state => {
  return {
    // focused: state.get("header").get("focused")
    focused: state.getIn(["header", "focused"])
  };
};
const mapDispathToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
      //   const action = {
      //     type: "search-focus"
      //   };
      //   dispatch(action);
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
      //   const action = {
      //     type: "search-blur"
      //   };
      //   dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
