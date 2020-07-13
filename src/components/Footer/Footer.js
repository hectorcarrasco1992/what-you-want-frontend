import React, { Component } from 'react';

import './Footer.css';
export default class Footer extends Component {
    render() {
        return (
            <>
                <hr />
                <footer className='site-footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8 col-sm-6 col-xs-12'>
                                <p className='copyright-text' style={{paddingBottom: '0px'}}>
                                    Copyright &copy; 2020 All Rights Reserved by
                                    <a href='/'> Carrwell Industries</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}
