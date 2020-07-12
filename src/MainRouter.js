import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Home = React.lazy(() => import('./components/Home/Home'));

const Login = React.lazy(() => import('./components/Login/Login'));
const Register = React.lazy(() => import('./components/Register/Register'));
const Friends = React.lazy(() => import('./components/Friends/Friends'));
const Activities = React.lazy(() => import('./components/Activities/Activities'));
const Restaurant = React.lazy(() => import('./components/Restaurant/Restaurant'));


export default class MainRouter extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/login' exact component={Login} />
                    
                    <PrivateRoute exact path='/friends' exact component={Friends} />
                    <PrivateRoute exact path='/activities' exact component={Activities} />
                    <PrivateRoute exact path='/restaurant' exact component={Restaurant} />
                   
                </Switch>
                
            </>
        );
    }
}
