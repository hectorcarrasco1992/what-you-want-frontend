import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthNavLinks from './AuthNavLinks';
import UnAuthNavLinks from './UnAuthNavLinks';

import { logout } from '../redux/actions/authUserAction';

import './Navbar.css';

export class Navbar extends Component {
    
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
        const { isAuthenticated, user } = this.props.authUser;
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

                            <nav>
                                {user && isAuthenticated ? (
                                    <AuthNavLinks
                                        {...user}
                                        {...isAuthenticated}
                                        logout={this.props.logout}
                                    />
                                ) : (
                                    <UnAuthNavLinks />
                                )}
                            </nav>

                            
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.authUser,
    };
};

export default connect(mapStateToProps, { logout })(Navbar);