import React, { Component } from 'react';

import Matches from '../Matches/Matches'

import InputGroup from '../shared/InputGroup';
import ButtonGroup from '../shared/ButtonGroup';

import './Friends.css';
export default class Friends extends Component {
    state = {
        canSubmit: true,
        formSetting: {
            name: {
                iconName: 'fas fa-search',
                type: 'text',
                name: 'name',
                placeholder: 'Enter Username',
                value: '',
                error: {
                    message: '',
                    noError: null,
                },
            },
        },
        validate: {
            usernameError: {
                noError: null,
                message: '',
            },
        },
    };

    onChange = (event) => {
        let inputForm = {
            ...this.state.formSetting,
        };

        inputForm[event.target.name].value = event.target.value;
        let isValidatedCheck = this.checkInputValidation(
            this.state.validate,
            event.target.name,
            event.target.value
        );
        inputForm['username'].error = isValidatedCheck.usernameError;

        this.setState({
            validate: isValidatedCheck,
        });
        if (inputForm['username'].error.noError === false) {
            this.setState({
                canSubmit: true,
            });
            return;
        }
        if (inputForm['username'].error.noError) {
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
                        {inputArray.map((element) => {
                            const {
                                formSetting: {
                                    name,
                                    placeholder,
                                    value,
                                    error,
                                    iconName,
                                },
                            } = element;
                            return (
                                <InputGroup
                                    key={name}
                                    name={name}
                                    iconName={iconName}
                                    placeholder={placeholder}
                                    onChange={this.onChange}
                                    value={value}
                                    error={error}
                                    type={name}
                                />
                            );
                        })}
                        <ButtonGroup
                            buttonStyle='btn'
                            title='Search'
                            disabled={canSubmit}
                        />
                
                    </form>
                </div>
                
                <Matches />
                
            </>
        );
    }
}
