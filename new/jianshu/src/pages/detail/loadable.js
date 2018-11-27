import React from "react";
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./'),     //异步加载的新语法
  loading(){
      return <div>正在加载</div>
  },
});

export default ()=><LoadableComponent/>
// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }