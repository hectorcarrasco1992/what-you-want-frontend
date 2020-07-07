import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Cards.css';

export default class Cards extends Component {
    render() {
        return (
            <>
                <div className='cards-list'>
                    <div className='card 1'>
                        <div className='card_image'>
                            <img
                                src='/images/rickandmorty.png'
                                alt='rickandmorty'
                            />
                        </div>
                        <div className='card_title title-white'>
                            <p>Oh Jeez!</p>
                        </div>
                    </div>

                    <div className='card 2'>
                        <div className='card_image'>
                            <img src='/images/broadway.jpg' alt='broadway' />
                        </div>
                        <div className='card_title title-white'>
                            <p>Broadway Shows</p>
                        </div>
                    </div>

                    <NavLink to='/restaurant'>
                        <div className='card 3'>
                            <div className='card_image'>
                                <img src='/images/food.jpg' alt='food' />
                            </div>
                            <div className='card_title title-white'>
                                <p>Restaurant's</p>
                            </div>
                        </div>
                    </NavLink>

                    <div className='card 4'>
                        <div className='card_image'>
                            <img src='/images/movies.jpg' alt='movies' />
                        </div>
                        <div className='card_title title-white'>
                            <p>Movies</p>
                        </div>
                    </div>
                    <div className='card 5'>
                        <div className='card_image'>
                            <img src='/images/hikes.jpg' alt='hikes' />
                        </div>
                        <div className='card_title title-white'>
                            <p>Hikes</p>
                        </div>
                    </div>
                    <div className='card 6'>
                        <div className='card_image'>
                            <img src='/images/bar.jpg' alt='bars' />
                        </div>
                        <div className='card_title title-white'>
                            <p>Bars</p>
                        </div>
                    </div>
                    <div className='card 7'>
                        <div className='card_image'>
                            <img src='/images/soon.jpg' alt='movies' />
                        </div>
                        <div className='card_title title-white'>
                            {/* <p>Coming Soon</p> */}
                        </div>
                    </div>
                    <div className='card 8'>
                        <div className='card_image'>
                            <img src='/images/soon2.jpg' alt='movies' />
                        </div>
                        <div className='card_title title-white'>
                            {/* <p>Coming Soon</p> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
