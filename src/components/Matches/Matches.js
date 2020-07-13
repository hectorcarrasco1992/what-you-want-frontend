import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    matchedActivity,
    activitiesAPI,
} from '../redux/actions/activityAction';

import ButtonGroup from '../shared/ButtonGroup';

import './Matches.css';

export class Matches extends Component {
    state = {
        canSubmit: false,
        matches: [],
    };

    checkMatches = () => {
        if (this.props.foundFriend && this.props.foundFriend.likes) {
            const newFoundFriendLikes = this.props.foundFriend.likes.map(
                (entry) => entry.name
            );
            const newUserLikes = this.props.userLikes.map(
                (entry) => entry.name
            );
            console.log(newFoundFriendLikes);
            console.log(newUserLikes);
            if (newUserLikes.length <= newFoundFriendLikes.length) {
                for (let i = 0; i <= newUserLikes.length; i++) {
                    if (newFoundFriendLikes.includes(newUserLikes[i])) {
                        let copyMatches = this.state.matches;
                        copyMatches.push(newUserLikes[i]);
                        this.setState({
                            matches: copyMatches,
                        });
                    }
                }
            } else {
                for (let i = 0; i <= newFoundFriendLikes.length; i++) {
                    if (newUserLikes.includes(newFoundFriendLikes[i])) {
                        let copyMatches2 = this.state.matches;
                        copyMatches2.push(newFoundFriendLikes[i]);
                        this.setState({
                            matches: copyMatches2,
                        });
                    }
                }
            }
        }
        console.log('After if statement', this.state.matches);
    };

    render() {
        console.log('this.state.matches:', this.state.matches);

        return (
            <>
                <div
                    id='left'
                    style={{ marginTop: '250px', marginLeft: '44%' }}
                >
                    {/* <img src='/images/mcadams.jpg' alt='profPic' /> */}
                    <div className='lefthover'>
                        <div className='miniposts'>
                            <p>
                                Name:{' '}
                                {this.props.foundFriend.name
                                    ? this.props.foundFriend.name
                                    : 'No user found'}
                            </p>
                        </div>
                        <div className='miniposts'>
                            <p>
                                City:{' '}
                                {this.props.foundFriend.city
                                    ? this.props.foundFriend.city
                                    : 'No user found'}
                            </p>
                        </div>
                        <div className='miniposts'>
                            <p>
                                State:{' '}
                                {this.props.foundFriend.state
                                    ? this.props.foundFriend.state
                                    : 'No user found'}
                            </p>
                        </div>
                        <div className='miniposts'>
                            <p>
                                Zip Code:{' '}
                                {this.props.foundFriend.zipCode
                                    ? this.props.foundFriend.zipCode
                                    : 'No user found'}
                            </p>
                        </div>

                        <ButtonGroup
                            buttonStyle='btn'
                            title='Check matches'
                            disabled={this.state.canSubmit}
                            onClick={() => this.checkMatches()}
                        />

                        <div className='miniposts'>
                            <p>
                                Matches: <br />
                                {this.state.matches.length > 0
                                    ? this.state.matches.map((item) => (
                                          <p>{item}</p>
                                      ))
                                    : ''}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    foundFriend: { ...state.friends.friends },
    userLikes: state.friends.user.likes,
});

export default connect(mapStateToProps, { matchedActivity })(Matches);
