import React, { Component } from 'react';

import Cards from '../Cards/Cards';

import './Activities.css';


export default class Activities extends Component {
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
