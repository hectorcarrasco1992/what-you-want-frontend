import React, { Component } from 'react';

import ButtonGroup from '../shared/ButtonGroup'

import './Matches.css';

export default class Matches extends Component {
    state = {
        canSubmit: false
    }

    render() {
        return (
            <>
                <div id='left' style={{marginTop: '250px', marginLeft: '44%'}}>
                    <img src='/images/mcadams.jpg' alt='profPic' />
                    <div className='lefthover'>
                        <div className='miniposts'>
                            <p>Name: {this.props.name}</p>
                        </div>
                        <div className='miniposts'>
                            <p>City: {this.props.city}</p>
                        </div>
                        <div className='miniposts'>
                            <p>State: {this.props.state}</p>
                        </div>
                        <div className='miniposts'>
                            <p>Zip Code: {this.props.zipCode}</p>
                        </div>
                        
                        <ButtonGroup
                            buttonStyle='btn'
                            title='Check matches'
                            disabled={this.state.canSubmit}
                        />
                    </div>
                </div>
              
                
            </>
        );
    }
}
