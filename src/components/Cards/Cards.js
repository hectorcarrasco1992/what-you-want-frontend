import React, { Component } from 'react';

import './Cards.css';

export default class Cards extends Component {
    
   

    render() {
        return (
            <>
                <h1 id='activity-title'>So many activities...</h1>
                <div className='cards-list'>
                    <div className='card 1'>
                        <div className='card_image'>
                            <img src='/images/rickandmorty.png' alt='rickandmorty' />
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

                    <div className='card 3'>
                        <div className='card_image'>
                            <img src='/images/food.jpg' alt='food' />
                        </div>
                        <div className='card_title title-white'>
                            <p>Restaurant's</p>
                        </div>
                    </div>

                    <div className='card 4'>
                        <div className='card_image'>
                            <img src='/images/movies.jpg' alt='movies' />
                        </div>
                        <div className='card_title title-white'>
                            <p>Movies</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
