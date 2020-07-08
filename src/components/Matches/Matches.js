import React, { Component } from 'react';

import ButtonGroup from '../shared/ButtonGroup'

import './Matches.css';

export default class Matches extends Component {
    render() {
        return (
            <>
                <div id='left' style={{marginTop: '250px', marginLeft: '44%'}}>
                    <img src='/images/mcadams.jpg' alt='profPic' />
                    <div className='lefthover'>
                        <div className='miniposts'>
                            <p>Name: Rachel McAdams</p>
                        </div>
                        <div className='miniposts'>
                            <p>City: New York</p>
                        </div>
                        <div className='miniposts'>
                            <p>State: NY</p>
                        </div>
                        <div className='miniposts'>
                            <p>Zip Code: 10036</p>
                        </div>
                        
                        <ButtonGroup
                            buttonStyle='btn'
                            title='Check matches'
                            // disabled={canSubmit}
                        />
                    </div>
                </div>
              
                
            </>
        );
    }
}
