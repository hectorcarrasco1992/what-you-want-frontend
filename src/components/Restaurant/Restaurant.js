import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonGroup from '../shared/ButtonGroup'
import { activitiesAPI } from '../redux/actions/activityAction';

import './Restaurant.css';

export class Restaurant extends Component {

    state = {
        canSubmit: true,
    }

    async componentDidMount() {
        if (
            this.props.authUser.isAuthenticated &&
            this.props.authUser.user !== null
        ) {
            await this.props.activitiesAPI();
        }
    }

    render() {
        return (
            <div className='activity-container' style={{paddingBottom: '60px'}}>
                <>
                    {this.props.activities.activities.map((item) => {
                        const { name, cost, cuisines, thumb, location } = item;
                        return (
                            <div className='activity-card' key={item._id}>
                                <img
                                    className='restaurant-image'
                                    src={thumb}
                                    alt='...'
                                />
                                <h1>{name}</h1>
                                <p>Cost: {cost}</p>
                                <p>Cuisines: {cuisines}</p>
                                <p>{location.address}</p>

                                <ButtonGroup
                                    buttonStyle='btn'
                                    title='Dislike'
                                    // disabled={canSubmit}
                                />
                                <ButtonGroup
                                    buttonStyle='btn'
                                    title='Like'
                                    // disabled={canSubmit}
                                />

                                <div>
                                    <i className='fas fa-hand-middle-finger'></i>
                                </div>
                            </div>
                        );
                    })}
                </>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    activities: state.activities,
    authUser: state.authUser,
});

export default connect(mapStateToProps, { activitiesAPI })(Restaurant);
