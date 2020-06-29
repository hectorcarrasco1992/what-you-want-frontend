import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Home = React.lazy(() => import('./components/Home/Home'));
const About = React.lazy(() => import('./components/About/About'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Register = React.lazy(() => import('./components/Register/Register'));
const Poop = React.lazy(() => import('./components/Poop/Poop'));
const Crap = React.lazy(() => import('./components/Crap/Crap'));

export default class MainRouter extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/about' exact component={About} />
                    <Route path='/poop' exact component={Poop} />
                    <Route path='/crap' exact component={Crap} />
                   
                </Switch>
            </>
        );
    }
}
