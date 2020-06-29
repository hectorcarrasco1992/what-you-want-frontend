import React, { Component } from 'react';

import './Register.css';
export default class Register extends Component {
    
    
    render() {
        return (
            <>
                <div class='login-box'>
                    <h1>Register</h1>
                    <div class='textbox'>
                        <i class='fas fa-user'></i>
                        <input
                            type='text'
                            placeholder='Username'
                            name='username'
                        />
                    </div>
                    <div class='textbox'>
                        <i class='fas fa-at'></i>
                        <input type='text' placeholder='Email' name='email' />
                    </div>
                    <div class='textbox'>
                        <i class='fas fa-lock'></i>
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                        />
                    </div>
                    <div class='textbox'>
                        <i class='fas fa-city'></i>
                        <input type='text' placeholder='City' name='city' />
                    </div>
                    <div class='textbox'>
                        <i class='fas fa-flag-usa'></i>
                        <input type='text' placeholder='State' name='state' />
                    </div>
                    <div class='textbox'>
                        <i class='fas fa-user'></i>
                        <input
                            type='text'
                            placeholder='Zip Code'
                            name='zipCode'
                        />
                    </div>
                    <input type='button' class='btn' value='Sign in' />
                </div>
            </>
        );
    }
}
