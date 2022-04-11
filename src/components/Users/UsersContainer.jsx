import {connect} from 'react-redux';
import Users from './Users';
import {
    toFollowActionCreator, 
    toUnFollowActionCreator,
    setUsersActionCreator,
    setUsersPaginationActionCreator} from '../../redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        countOnPage: state.usersPage.countOnPage
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
        },
        setUsersPagination: (numPage) => {
            dispatch(setUsersPaginationActionCreator(numPage))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;