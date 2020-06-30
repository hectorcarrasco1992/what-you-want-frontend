import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';

import { Provider } from 'react-redux';
import store from './components/redux/store/store';

import Loading from './components/Loading/Loading';

import './App.css';

export default class App extends Component {
    componentDidMount() {
        // console.log(document.cookie);
    }

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
