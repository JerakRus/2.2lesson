import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from "react-redux";

import App from "./app/components/App";
import MainPage from "./app/components/MainPage";
import Users from "./app/components/PageUsers";
import User from "./app/components/PageUser";
import NotFound from "./app/components/NotFound";
import Auth from "./app/components/Auth";
import MainText from "./app/components/MainText";

import changePostReducer from "./reducers/reducer";

import "./app/assets/styles.css"



const app = document.getElementById('app');
const store = createStore(changePostReducer);


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                    <IndexRoute component={MainPage}/>
                <Route path="users" component={Users}>
                        <Route path=":userId" component={User}/>
                </Route>
                <Route path="auth" component={Auth} />
                <Route path="posts" component={MainText} />
                    <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
app);