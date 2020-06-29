import React, { Component } from 'react';

import './Cards.css';

export default class Cards extends Component {
    
   

    render() {
        return (
            <>
                <h1 id='activity-title'>So many activities...</h1>
                <div class='cards-list'>
                    <div class='card 1'>
                        <div class='card_image'>
                            <img src='/images/rickandmorty.png' alt='rickandmorty' />
                        </div>
                        <div class='card_title title-white'>
                            <p>Oh Jeez!</p>
                        </div>
                    </div>

                    <div class='card 2'>
                        <div class='card_image'>
                            <img src='/images/broadway.jpg' alt='broadway' />
                        </div>
                        <div class='card_title title-white'>
                            <p>Broadway Shows</p>
                        </div>
                    </div>

                    <div class='card 3'>
                        <div class='card_image'>
                            <img src='/images/food.jpg' alt='food' />
                        </div>
                        <div class='card_title title-white'>
                            <p>Restaurant's</p>
                        </div>
                    </div>

                    <div class='card 4'>
                        <div class='card_image'>
                            <img src='/images/movies.jpg' alt='movies' />
                        </div>
                        <div class='card_title title-white'>
                            <p>Movies</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
