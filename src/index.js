import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import {Provider} from 'react-redux'

import store from './redux/store'

import Login from './pages/login/login'
import Main from './pages/main/main'

import 'antd/dist/antd.less'



render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route component={Main}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    ), document.getElementById('root')
)