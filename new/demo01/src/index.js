import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import {Provider} from "react-redux";
import store from "./store";

const App=(
    <Provider store={store} >
        <Router />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
