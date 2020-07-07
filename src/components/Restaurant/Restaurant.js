import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonGroup from '../shared/ButtonGroup'
import { activitiesAPI,likeActivity } from '../redux/actions/activityAction';

import './Restaurant.css';

export class Restaurant extends Component {

    state = {
        canSubmit: false,
    }

    async componentDidMount() {
        if (
            this.props.authUser.isAuthenticated &&
            this.props.authUser.user !== null
        ) {
            await this.props.activitiesAPI(this.props.authUser.user)
            console.log(this.props.authUser.user);
            ;
        }
    }

    handleLike=async (name)=>{
        try {
            let success = await likeActivity(name)
            console.log(success);
            console.log(name);
            
            return success
            
        } catch (error) {
            console.log(error);
            
        }
    }

    render() {
        return (
            <div className='activity-container' style={{paddingBottom: '60px'}}>
                <>
                    {this.props.activities.activities.map((item) => {
                        const { name, cost, cuisines, thumb, location, } = item;
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
                            {console.log(item)}
                                <ButtonGroup
                                    buttonStyle='btn'
                                    style={{border: '1px solid red'}}
                                    title='Dislike'
                                    id='dislike'
                                    // disabled={canSubmit}
                                />
                                <ButtonGroup
                                    buttonStyle='btn'
                                    title='Like'
                                    disabled={this.state.canSubmit}
                                    onClick={()=>this.handleLike(item.name)}
                                />

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

export default connect(mapStateToProps, { activitiesAPI,likeActivity })(Restaurant);
