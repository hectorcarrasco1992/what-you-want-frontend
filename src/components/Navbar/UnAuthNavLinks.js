import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class UnAuthNavLinks extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <div className='navbar' id='nav'>
                        <ul>
                            <NavLink to='/' id='nav-links'>
                                <img
                                    src='images/logo.png'
                                    alt='logo'
                                    id='nav-logo'
                                />
                            </NavLink>

                            <li>
                                <NavLink to='/register' id='nav-links'>
                                    Register
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/login' id='nav-links'>
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
