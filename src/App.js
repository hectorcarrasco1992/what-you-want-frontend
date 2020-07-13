import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';
import Loading from './components/Loading/Loading';
import checkTokenAuth from './components/redux/lib/helpers/checkTokenAuth';

import { Provider } from 'react-redux';
import store from './components/redux/store/store';

import './App.css';

checkTokenAuth(store);
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <React.Suspense fallback={<Loading />}>
                        <MainRouter />
                    </React.Suspense>
                </Router>
            </Provider>
        );
    }
}
