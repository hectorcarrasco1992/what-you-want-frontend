import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class About extends Component {
    componentDidMount(){
        console.log(this.props);
        
    }
    render() {
        return (
            <>
                <div className='heading'>
                    <h1 id='h1-header'>Hey from About page</h1>
                </div>
            </>
        );
    }
}
