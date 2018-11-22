//UI组件只负责页面显示，又叫傻瓜组件，没有业务逻辑
import React, { Component,Fragment } from "react";
import { Input ,Button ,List} from 'antd';

class TodoListUI extends Component {
  render() {
    return (
        <Fragment>
          <div style={{ marginTop: 10, marginLeft: 10 }}>
            <Input
              onChange={this.props.handleInputChange}
              value={this.props.inputValue}
              placeholder="hello"
              style={{ width: 300, marginRight: 10 }}
            />
            <Button onClick={this.props.handleBtnClick} type="primary">
              按钮
            </Button>
            <List
              style={{ marginTop: 10, width: 300 }}
              bordered
              dataSource={this.props.list}
              renderItem={(item, index) => (
                  //箭头函数调用方法，可以传值
                <List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>
                  {item}
                </List.Item>
              )}
            />
          </div>
        </Fragment>
    );
  }
}

export default TodoListUI;
