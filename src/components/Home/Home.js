import React, { Component } from 'react';

import Footer from '../Footer/Footer'

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
                        id='imgRight'
                    />
                    <div>
                        <h2>You know these feels bro?</h2>
                        <br />
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
                            or our favorite "I don't know, you pick. 🤷‍♀️"
                        </p>
                    </div>
                </div>

                <div className='box2'>
                    <img src='images/wtf.jpg' alt='wtf' id='imgLeft' />
                    <div>
                        <h2 style={{ paddingTop: '70px' }}>
                            Salvage your relationship
                        </h2>
                        <br />
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

                <h1 id='picture-title'>
                    Turn that <span style={{ color: 'red' }}>nightmare</span>{' '}
                    into this{' '}
                    <span style={{ color: 'rgb(89, 139, 247)' }}>dream</span>!!
                </h1>

                <div className='box3' style={{ paddingBottom: '100px' }}>
                    <img src='images/happy.jpg' alt='happy' id='imgRight' />
                    <div>
                        <h2 style={{ paddingTop: '130px' }}>
                            "Happy wife, happy life."
                        </h2>
                        <br />
                        <p style={{ fontSize: '20px' }}>
                            Something witty and shit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem atque et optio nemo aliquid fugit illum laudantium molestias voluptatem voluptate.
                        </p>
                    </div>
                </div>

                <div className='box4' style={{ paddingBottom: '150px' }}>
                    <img src='images/happy2.jpg' alt='happy2' id='imgLeft' />
                    <div>
                        <h2 style={{ paddingTop: '130px' }}>
                            Smiles all around.
                        </h2>
                        <br />
                        <p style={{ fontSize: '20px' }}>
                            It's time to enjoy each others company instead of
                            letting small things get in the way.
                        </p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}
