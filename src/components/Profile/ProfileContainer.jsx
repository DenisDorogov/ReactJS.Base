import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profile-reducer';
import axios from 'axios';

class ProfileContainer extends React.Component {

    componentDidMount() {
        console.log('componentDidMount ProfileContainer props: ', this.props);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }
    render() {
        console.log('render ProfileContainer props: ', this.props);
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);