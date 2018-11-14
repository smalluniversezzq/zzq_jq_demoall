import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, hashHistory} from 'react-router';

import App from './containers/app/App.jsx';
import Home from './containers/home/home.jsx';
import Login from './containers/login/login.jsx';
import Register from './containers/login/register.jsx';
import Verification from './containers/verification/verification.jsx';
import Popularity from './containers/popularity/popularity.jsx';
import Growup from './containers/growup/growup.jsx';
import News from './containers/news/news.jsx';
import Personal from './containers/personal/personal.jsx';

ReactDOM.render((
    <Router history={hashHistory}>
        {/* 广告页 */}
        <Route path="/" component={App} />
        {/* 首页 */}
        <Route path="/home" component={Home} />
        {/* 注册 */}
        <Route path="/login" component={Login} />
        {/* 注册 */}
        <Route path="/register" component={Register} />
        {/* 验证 */}
        <Route path="/verification" component={Verification} />
        {/* 发现 */}
        <Route path="/popularity" component={Popularity} />
        {/* 成长 */}
        <Route path="/growup" component={Growup} />
        {/* 消息 */}
        <Route path="/news" component={News} />
        {/* 我 */}
        <Route path="/personal" component={Personal} />
    </Router>
), document.getElementById('root'));