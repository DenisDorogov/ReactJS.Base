import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import axios from 'axios';
import {
    toFollowActionCreator,
    toUnFollowActionCreator,
    setUsersActionCreator,
    setUsersPaginationActionCreator,
    setTotalUsersCountActionCreator,
    setIsLoadingActionCreator
} from '../../redux/users-reducer';


class UsersContainer extends React.Component { //Внутренний контейнер

    componentDidMount() {
        this.props.setIsLoading(true);
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countOnPage}&page=${this.props.currentPage}`)
                .then(response => {
                    this.props.setTotalUsersCount(response.data.totalCount);
                    this.props.setUsers(response.data.items);
                    this.props.setIsLoading(false);
                });
        }
    }

    setCurrentPage = (page) => {
        this.props.setIsLoading(true);
        this.props.setUsersPagination(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countOnPage}&page=${page}`)
            .then(response => {
                this.props.setIsLoading(false);
                this.props.setUsers(response.data.items);
                
            });
    }

    render() {
        return (
            <Users
                totalCount={this.props.totalCount}
                countOnPage={this.props.countOnPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                users={this.props.users}
                setCurrentPage={this.setCurrentPage}
                isLoading={this.props.isLoading}
            />
        );

    }


}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        countOnPage: state.usersPage.countOnPage,
        isLoading: state.usersPage.isLoading
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
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountActionCreator(count))
        },
        setIsLoading: (isLoading) => {
            dispatch(setIsLoadingActionCreator(isLoading))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer); //Внешний контейнер
