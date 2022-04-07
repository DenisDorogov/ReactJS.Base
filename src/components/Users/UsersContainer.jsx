import {connect} from 'react-redux';
import Users from './Users';
import {
    toFollowActionCreator, 
    toUnFollowActionCreator,
    setUsersActionCreator} from '../../redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(toFollowActionCreator(userID));
        },
        unfollow: (userID) => {
            dispatch(toUnFollowActionCreator(userID));
        },
        setUsers: (usersList) => {
            dispatch(setUsersActionCreator(usersList));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;