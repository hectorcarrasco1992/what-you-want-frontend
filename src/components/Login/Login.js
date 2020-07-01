import React, { Component } from 'react';
import validator from 'validator';
import { connect } from 'react-redux';

import { loginAPI } from '../redux/actions/authUserAction';

import InputGroup from '../shared/InputGroup';
import ButtonGroup from '../shared/ButtonGroup';

import { successToast, failureToast } from '../Toastify/Toast';

export class Login extends Component {
           state = {
               canSubmit: true,
               formSetting: {
                   email: {
                       iconName: 'fas fa-at',
                       type: 'text',
                       name: 'email',
                       placeholder: 'Enter email',
                       value: '',
                       error: {
                           message: '',
                           noError: null,
                       },
                   },
                   password: {
                       name: 'password',
                       iconName: 'fas fa-lock',
                       type: 'text',
                       placeholder: 'Enter password',
                       value: '',
                       error: {
                           message: '',
                           noError: null,
                       },
                   },
               },
               validate: {
                   emailError: {
                       noError: null,
                       message: '',
                   },
                   passwordError: {
                       noError: null,
                       message: '',
                   },
               },
           };

           checkInputValidation = (errorState, inputName, inputValue) => {
               switch (inputName) {
                   case 'email':
                       let validatedEmail;
                       validatedEmail = validator.isEmail(inputValue);
                       if (!validatedEmail) {
                           errorState.emailError.noError = validatedEmail;
                           errorState.emailError.message =
                               'It must be an email';
                           return errorState;
                       } else {
                           errorState.emailError.noError = validatedEmail;
                           errorState.emailError.message = '';
                           return errorState;
                       }

                   case 'password':
                       let validatedPassword;
                       validatedPassword = !validator.isEmpty(inputValue);
                       if (!validatedPassword) {
                           errorState.passwordError.noError = validatedPassword;
                           errorState.passwordError.message =
                               'Password cannot be empty';
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
               inputForm[event.target.name].value = event.target.value;
               let isValidatedCheck = this.checkInputValidation(
                   this.state.validate,
                   event.target.name,
                   event.target.value
               );
               inputForm['email'].error = isValidatedCheck.emailError;
               inputForm['password'].error = isValidatedCheck.passwordError;
               this.setState({
                   validate: isValidatedCheck,
               });
               if (
                   inputForm['email'].error.noError === false ||
                   inputForm['password'].error.noError === false
               ) {
                   this.setState({
                       canSubmit: true,
                   });
                   return;
               }
               if (
                   inputForm['email'].error.noError === true &&
                   inputForm['password'].error.noError === true
               ) {
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

           onSubmit = async (event, dispatch) => {
               event.preventDefault();
               const { email, password } = this.state.formConfig;
               try {
                   let inputForm = {
                       ...this.state.formSetting,
                   };

                   await this.props.loginAPI({
                       email: email.value,
                       password: password.value,
                   });

                   inputForm['email'].value = '';
                   inputForm['password'].value = '';

                   successToast('🐒Welcome Back!');

                   this.props.history.push('/activities');
               } catch (e) {
                   failureToast(e);
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
                       <div className=''>
                           <form
                               className='login-box'
                               onSubmit={this.onSubmit}
                               >
                               <h1>Login</h1>
                               {inputArray.map((element) => {
                                   const {
                                       formSetting: {
                                           name,
                                           iconName,
                                           placeholder,
                                           value,
                                           error,
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
                                   title='Sign in'
                                   disabled={canSubmit}
                               />
                           </form>
                       </div>
                   </>
               );
           }
       }


const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { loginAPI })(Login);
