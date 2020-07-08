import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import { findFriendAPI } from '../redux/actions/friendAction';

import Matches from '../Matches/Matches';

import InputGroup from '../shared/InputGroup';
import ButtonGroup from '../shared/ButtonGroup';

import './Friends.css';
export class Friends extends Component {
    state = {
        canSubmit: false,
        formSetting: {
            name: {
                iconName: 'fas fa-search',
                type: 'text',
                name: 'username',
                placeholder: 'Enter Username',
                value: '',
                error: {
                    message: '',
                    noError: null,
                },
            },
        },
        inputValue: '',
        validate: {
            usernameError: {
                noError: null,
                message: '',
            },
        },
    };

    checkInputValidation = (errorState, inputName, inputValue) => {
        switch (inputName) {
            case 'username':
                let validatedUsername;
                validatedUsername = validator.matches(
                    inputValue,
                    /^[a-zA-Z0-9]{1,20}$/
                );
                if (!validatedUsername) {
                    errorState.usernameError.noError = validatedUsername;
                    errorState.usernameError.message =
                        'cannot contain special characters and minimum of 2 and maximum of 20 characters';
                    return errorState;
                } else {
                    errorState.usernameError.noError = validatedUsername;
                    errorState.usernameError.message = '';
                    return errorState;
                }
            case 'email':
                let validatedEmail;
                validatedEmail = validator.isEmail(inputValue);
                if (!validatedEmail) {
                    errorState.emailError.noError = validatedEmail;
                    errorState.emailError.message = 'It must be an email';
                    return errorState;
                } else {
                    errorState.emailError.noError = validatedEmail;
                    errorState.emailError.message = '';
                    return errorState;
                }
            case 'password':
                // let validatedPassword;
                // validatedPassword = validator.matches(
                //   inputValue,
                //   "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                // );
                let validatedPassword = true;
                if (!validatedPassword) {
                    errorState.passwordError.noError = validatedPassword;
                    errorState.passwordError.message =
                        'Minimum eight characters, at least one letter, one number and one special character';
                    return errorState;
                } else {
                    errorState.passwordError.noError = validatedPassword;
                    errorState.passwordError.message = '';
                    return errorState;
                }
            default:
                return errorState;
        }
    };

    onChange = (event) => {
        let inputForm = {
            ...this.state.formSetting,
        };

        this.setState({
            ...this.state,
            inputValue: event.target.value,
        });

        // console.log('event.target', event.target);

        // console.log('$$$$$$', [event.target.name]);

        // console.log('state....', this.state);

        let isValidatedCheck = this.checkInputValidation(
            this.state.validate,
            event.target.name,
            event.target.value
        );

        inputForm['name'].error = isValidatedCheck.usernameError;

        this.setState({
            validate: isValidatedCheck,
        });

        if (inputForm['name'].error.noError === false) {
            this.setState({
                canSubmit: true,
            });
            return;
        }
        if (inputForm['name'].error.noError) {
            this.setState({
                canSubmit: false,
            });
            return;
        } else {
            this.setState({
                ...this.state,
                formConfig: inputForm,
            });
            return;
        }
    };

    onSubmit = async (event) => {
        event.preventDefault();

        console.log('inputValue', this.state.inputValue);

        try {
            await this.props.findFriendAPI({
                username: this.state.inputValue,
            });

            console.log('this.props :>> ', this.props.friends);
        } catch (error) {
            console.log('Error', error);
        }
    };

    render() {
        const { canSubmit, formSetting } = this.state;
        let inputArray = [];
        for (let key in formSetting) {
            inputArray.push({
                formSetting: formSetting[key],
            });
        }
        return (
            <>
                <div className='search-container'>
                    <form className='friends-box' onSubmit={this.onSubmit}>
                        <h1>Find Friends</h1>
                        <InputGroup
                            key={this.state.formSetting.name.name}
                            name={this.state.formSetting.name.name}
                            iconName={this.state.formSetting.name.iconName}
                            placeholder={
                                this.state.formSetting.name.placeholder
                            }
                            onChange={this.onChange}
                            value={this.state.inputValue}
                            error={this.state.formSetting.name.error}
                            type={this.state.formSetting.name.name}
                        />
                        <ButtonGroup
                            buttonStyle='btn'
                            title='Search'
                            disabled={canSubmit}
                        />
                        {/* {inputArray.map((element) => {
                                                            const {
                                                                formSetting: {
                                                                    name,
                                                                    placeholder,
                                                                    value,
                                                                    error,
                                                                    iconName,
                                                                },
                                                            } = element;
                            
                            
                        })} */}
                    </form>
                </div>

                <Matches
                    name={this.props.friends.friends.name}
                    city={this.props.friends.friends.city}
                    state={this.props.friends.friends.state}
                    zipCode={this.props.friends.friends.zipCode}
                
                />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    friends: state.friends,
    authUser: state.authUser,
});

export default connect(mapStateToProps, { findFriendAPI })(Friends);
