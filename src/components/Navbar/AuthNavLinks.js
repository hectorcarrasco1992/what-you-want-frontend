import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default class AuthLinks extends Component {
    render() {
        return (
            <>
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
                                <NavLink to='/activities' id='nav-links'>
                                    Activities
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/friends' id='nav-links'>
                                    Find Friends{' '}
                                    <span role='img' aria-label='surf'>
                                        🏄‍♂️
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/user-profile' id='nav-links'>
                                    {this.props.username}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/login'
                                    id='nav-links'
                                    onClick={() => {
                                        this.props.logout();
                                    }}
                                >
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}
