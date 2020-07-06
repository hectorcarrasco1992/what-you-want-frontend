import React, { Component } from 'react';

import Cards from '../Cards/Cards';

import './Activities.css';
export class Activities extends Component {

    async componentDidMount() {
        if (
            this.props.authUser.isAuthenticated &&
            this.props.authUser.user !== null
        ) {
            await this.props.activitiesAPI(this.props.authUser.user);
        }
    }

export default class Choices extends Component {
    render() {
        return (
            <>
                <div className='activities-box'>
                    <Cards />
                </div> 
            </>
        );
    }
}
