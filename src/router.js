import React from 'react';

import { Route, Switch } from 'react-router-dom';

// 引入页面
import Home from './pages/homepage';
import Login from './pages/login';

// 路由
const getRouter = () => (
    <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={Login} path="/login"/>
    </Switch>
);

export default getRouter;
