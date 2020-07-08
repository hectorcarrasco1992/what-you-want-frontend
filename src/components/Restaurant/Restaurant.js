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

    handleLike=async (id)=>{
        try {
            console.log(id);
            
            //console.log(id);
            let success = await likeActivity(id)
            console.log(success);
            
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
                        const {canSubmit}= this.state
                        const { name, cost, cuisines, thumb, location,apiID } = item;
                        {console.log(item.apiID);
                        }
                        return (
                            <div className='activity-card' key={apiID}>
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
                                    style={{border: '1px solid red'}}
                                    title='Dislike'
                                    id='dislike'
                                    disabled={canSubmit}
                                />
                                <ButtonGroup
                                    buttonStyle='btn'
                                    title='Like'
                                    disabled={canSubmit}
                                    onClick={()=>this.handleLike(apiID)}
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
