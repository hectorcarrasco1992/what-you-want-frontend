import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default class Navbar extends Component {
    
    componentDidMount() {
        const nav = document.getElementById('nav')

        window.onscroll = function() {
            if (window.pageYOffset > 10) {
                nav.style.background = 'rgb(38, 38, 39) ';
                // nav.style.boxShadow = '10px 4px 1px black'
            } else {
                nav.style.background = 'transparent'
                // nav.style.boxShadow = 'none';
            }
        }
    }

    render() {
        return (
            <>
                <div className='header'>
                    <div className='navbar' id='nav'>
                        <ul>
                            <NavLink to='/' id='nav-links'>
                                <img
                                    src='images/roamin.png'
                                    alt='logo'
                                    id='nav-logo'
                                />
                            </NavLink>

                            <li>
                                <NavLink to='/about' id='nav-links'>
                                    About
                                </NavLink>
                            </li>
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
                            <li>
                                <NavLink to='/crap' id='nav-links'>
                                    Crap
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/poop' id='nav-links'>
                                    Poop
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}
