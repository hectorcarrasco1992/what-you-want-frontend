import React, { Component } from 'react';

import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='banner'>
                    {/* <video autoPlay mute d> */}
                    <video autoPlay muted loop>
                        <source src='/images/wdyw.mp4' type='video/mp4' />
                    </video>
                    <div className='content'>
                        <h1>What do you want?</h1>
                        <p>
                            This app is for all you people that can never decide
                            on what to eat, where to go, or what to do. Thinking
                            is hard, so we do all that shit for you.
                            <span role='img' aria-label='rockin'>
                                🤘
                            </span>
                        </p>
                    </div>
                </div>
                <h1 id='picture-title'>Does this look familiar??</h1>

                <div className='box1' style={{ paddingBottom: '100px' }}>
                    <img
                        src='images/disagree.jpg'
                        alt='disagree'
                        id='disagree'
                    />
                    <div>
                        <h2>You know these feels bro?</h2>
                        <p style={{ fontSize: '20px' }}>
                            Everyday couple's bitch and moan trying to figure
                            out where to eat. <br />
                            You get the same response. Classics like: <br />
                            <br />
                            "No we ate there last time.",
                            <br /> "I cant decide.", <br />
                            "Why do I always have to choose.", <br />
                            'I{' '}
                            <span style={{ color: 'red', fontWeight: '800' }}>
                                HATE
                            </span>{' '}
                            that place.', <br />
                            or our favorite "I don't know 🤷‍♀️"
                        </p>
                    </div>
                </div>

                <div className='box2'>
                    <img src='images/wtf.jpg' alt='wtf' id='wtf' />
                    <div>
                        <h2>Salvage your relationship</h2>
                        <p style={{ fontSize: '20px' }}>
                            This chick is sick of her mans crappy choices about
                            what to do on their first day off together in weeks.
                            Shes counting down the seconds till she can go hit
                            up her side-piece. Leaving you all alone watching
                            re-runs of "Friends", eating three pint's of Ben and
                            Jerry's Ice cream. Then going to bed alone, like a
                            loser. Lets break the cycle gentlemen.
                        </p>
                    </div>
                </div>
                
                <div className='box3'></div>
            </>
        );
    }
}
