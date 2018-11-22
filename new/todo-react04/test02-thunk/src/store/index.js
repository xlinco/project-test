//使用redux-thunk中间件，需要引入applyMiddleware
import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from "./reducer";   //reducer传入store数据

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
    const enhancer = composeEnhancers(
        applyMiddleware(thunk)
      );
const store=createStore(
    reducer,
    enhancer
);

// const store=createStore(
//     reducer,
//     applyMiddleware(thunk)
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   //调试store使用
// );
export default store;