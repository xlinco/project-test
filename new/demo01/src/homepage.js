import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getDeleteItemAction } from "./store/actionCreators";

//无状态组件
const HomePage = props => {
  const { list, handleDelete } = props;
  return (
    <Fragment>
      <div>个人信息</div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                删除
              </button>
              <p>姓名：{item.name}</p>
              <p>性别：{item.gender}</p>
              <p>年龄：{item.age}</p>
              <p>爱好：{item.hobby}</p>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    list: state.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleDelete(index) {
      const action = getDeleteItemAction(index);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
