import React, { Component } from 'react';
import { connect } from 'react-redux';

import { activitiesAPI } from '../redux/actions/activityAction';

import './Activities.css';
export class Activities extends Component {

    async componentDidMount() {
        if (
            this.props.authUser.isAuthenticated &&
            this.props.authUser.user !== null
        ) {
            await this.props.activitiesAPI();
        }
    }

    render() {
        console.log(this.props.activities.activities);
      
        return (
            <>
                {this.props.activities.activities.map((item) => {
                    const { name, cost, cuisines, thumb, location } = item;
                    return (
                        <div className='activity-card' key={item._id}>
                            <span className='tag'>NEW</span>
                            <img
                                className='restaurant-image'
                                src={thumb}
                                alt='...'
                            />
                            <h1>{name}</h1>
                            <p>
                                Cost: {cost}
                            </p>
                            <p>
                                Cuisines: {cuisines}
                            </p>
                            <p>{location.address}</p>

                            <div>
                                <i className='fas fa-hand-middle-finger'></i>
                            </div>
                        </div>
                    );
                })}
                
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    activities: state.activities,
    authUser: state.authUser,
});

export default connect(mapStateToProps, { activitiesAPI })(Activities);
