import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <>
                 <div class='login-box'>
                    <h1>Login</h1>
                    <div class='textbox'>
                        <i class='fas fa-user'></i>
                        <input type='text' placeholder='Username' />
                    </div>

                    <div class='textbox'>
                        <i class='fas fa-lock'></i>
                        <input type='password' placeholder='Password' />
                    </div>

                    <input type='button' class='btn' value='Sign in' />
                </div>
            </>
        
        )
    }
}
