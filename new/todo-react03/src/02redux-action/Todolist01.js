import React, { Component,Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input ,Button ,List} from 'antd';

const data = [
  'Ant Design Title 1',
  'Ant Design Title 2',
  'Ant Design Title 3',
  'Ant Design Title 4',
  'Ant Design Title 5'
];

class Todolist extends Component {
  
  render(){
    return (
      <Fragment>
        <div style={{marginTop:10,marginLeft:10}}>
        <Input placeholder="hello" style={{width:300,marginRight:10}}/>
        <Button type="primary">按钮</Button>
        <List
          style={{marginTop:10,width:300}}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
        </div>
        
      </Fragment>
    )
  }
}

export default Todolist;
