import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  getAddmessageAction,
  getInputNameAction,
  getInputGenderAction,
  getInputAgeAction,
  getInputHobbyAction
} from "./store/actionCreators";

const Addmessage = props => {
  const {
    inputNameValue,
    handleInputNameChange,
    handleInputGenderChange,
    inputGenderValue,
    handleInputAgeChange,
    inputAgeValue,
    handleInputHobbyChange,
    inputHobbyValue,
    handleAddmessage
  } = props;
  return (
    <Fragment>
      <div>请输入新增信息</div>
      <div>
        姓名：
        <input
          placeholder="姓名"
          onChange={handleInputNameChange}
          value={inputNameValue}
        />
      </div>
      <div>
        性别：
        <input
          placeholder="性别"
          onChange={handleInputGenderChange}
          value={inputGenderValue}
        />
      </div>
      <div>
        年龄：
        <input
          placeholder="年龄"
          onChange={handleInputAgeChange}
          value={inputAgeValue}
        />
      </div>
      <div>
        爱好：
        <input
          placeholder="爱好"
          onChange={handleInputHobbyChange}
          value={inputHobbyValue}
        />
      </div>
      <button onClick={handleAddmessage}>确认添加</button>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    // inputValue:state.inputValue,
    inputNameValue: state.inputNameValue,
    inputGenderValue: state.inputGenderValue,
    inputAgeValue: state.inputAgeValue,
    inputHobbyValue: state.inputHobbyValue,
    list: state.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleAddmessage() {
      const action = getAddmessageAction();
      dispatch(action);
    },
    handleInputNameChange(e) {
      const action = getInputNameAction(e.target.value);
      dispatch(action);
    },
    handleInputGenderChange(e) {
      const action = getInputGenderAction(e.target.value);
      dispatch(action);
    },
    handleInputAgeChange(e) {
      const action = getInputAgeAction(e.target.value);
      dispatch(action);
    },
    handleInputHobbyChange(e) {
      const action = getInputHobbyAction(e.target.value);
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Addmessage);
