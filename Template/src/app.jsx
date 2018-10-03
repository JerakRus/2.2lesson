import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from "./app/components/App";
import MainPage from "./app/components/MainPage";
import Users from "./app/components/PageUsers";
import User from "./app/components/PageUser";
import NotFound from "./app/components/NotFound";

import "./app/assets/styles.css"



const app = document.getElementById('app');


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
                <IndexRoute component={MainPage}/>
            <Route path="users" component={Users}>
                    <Route path=":userId" component={User}/>
            </Route>
                <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
app);