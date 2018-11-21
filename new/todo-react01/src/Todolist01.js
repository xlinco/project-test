import React, { Component,Fragment } from 'react';

class Todolist extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input/><button>提交</button>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
