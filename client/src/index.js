import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import socketMiddleware from './middleware/redux/socket_middleware';
import reducers from './reducers';
import Routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk, socketMiddleware('https://smart-planner.herokuapp.com'))(createStore);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(reducers)} >
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

