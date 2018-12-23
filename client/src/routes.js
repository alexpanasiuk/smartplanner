import React from 'react';
import { Switch , Route } from 'react-router-dom';

import Home from './components/home/home';
import AppContainer from './containers/app';
import Auth from './hoc/auth/auth';


export default function Routes() {
    return (
        <Switch>
            <Route path='/app' component={Auth(AppContainer, true)}></Route>
            <Route path='/' exact component={Home}></Route>
        </Switch>
    )
}
