import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import MainRouter from './MainRouter';

import Loading from './components/Loading/Loading';

export default class App extends Component {
    componentDidMount() {
        // console.log(document.cookie);
    }

    render() {
        return (
            <Router>
                <React.Suspense fallback={<Loading/>}>
                    <MainRouter />
                </React.Suspense>
            </Router>
        );
    }
}
