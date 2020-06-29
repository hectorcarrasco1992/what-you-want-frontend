import React, { Component } from 'react';

import './Register.css';
export default class Register extends Component {
    // state = {
    //     canSubmit: true,
    //     formSetting: {
    //         name: {
    //             name: 'name',
    //             placeholder: 'Enter name',
    //             value: '',
    //             error: {
    //                 message: '',
    //                 noError: null,
    //             },
    //         },
    //         username: {
    //             name: 'username',
    //             placeholder: 'Enter username',
    //             value: '',
    //             error: {
    //                 message: '',
    //                 noError: null,
    //             },
    //         },
    //         email: {
    //             name: 'email',
    //             placeholder: 'Enter email',
    //             value: '',
    //             error: {
    //                 message: '',
    //                 noError: null,
    //             },
    //         },
    //         password: {
    //             name: 'password',
    //             placeholder: 'Enter password',
    //             value: '',
    //             error: {
    //                 message: '',
    //                 noError: null,
    //             },
    //         },
    //         city: {
    //             name: 'city',
    //             placeholder: 'Enter city',
    //             value: '',
    //             error: {
    //                 message: '',
    //                 noError: null,
    //             },
    //         },
    //         state: {
    //             name: 'state',
    //             placeholder: 'Enter state',
    //             value: '',
    //             error: {
    //                 message: '',
    //                 noError: null,
    //             },
    //         },
    //         zipCode: {
    //             name: 'zipCode',
    //             placeholder: 'Enter zip code',
    //             value: '',
    //             error: {
    //                 message: '',
    //                 noError: null,
    //             },
    //         },
    //     },
    //     validate: {
    //         usernameError: {
    //             noError: null,
    //             message: '',
    //         },
    //         emailError: {
    //             noError: null,
    //             message: '',
    //         },
    //         passwordError: {
    //             noError: null,
    //             message: '',
    //         },
    //         cityError: {
    //             noError: null,
    //             message: '',
    //         },
    //         stateError: {
    //             noError: null,
    //             message: '',
    //         },
    //         zipCodeError: {
    //             noError: null,
    //             message: '',
    //         },
    //     },
    // };

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

// const mapStateToProps = (state) => ({});

// export default connect(mapStateToProps, { signupAPI })(Signup);
// export default connect(mapStateToProps, { signupAPI })(Signup);
