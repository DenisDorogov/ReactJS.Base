import * as axios from 'axios';
import React from 'react';
import style from './users.module.css';
import defaultPhoto from '../../assets/img/defaultUser.png';

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=20')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    checkFollow = (followed, id) => {
        if (followed) {
            return (
                <button className={style.followButton}
                        onClick={() => this.props.unfollow(id)}
                >unfollow</button>
                )
        } else {
            return (
                <button className={style.followButton}
                        onClick={() => this.props.follow(id)}
                >follow</button>
            );
        }
    }

    render() {
        return (
            <div className={style.wrapper}>
                {this.props.users.map((u) => { 
                    return (
                    <div className={style.userBox} key={u.id}>
                        <img src={u.photos.small != null ? u.photos.small : defaultPhoto} 
                            alt={u.name}/>
                        <div className={style.userInfo}>
                            <p>{u.name}</p>
                            <p>{u.status}</p>
                            {/* <p>{u.location.city}</p>
                            <p>{u.location.country}</p> */}
                        </div>
                        {this.checkFollow(u.followed, u.id)}
                    </div>
                )})}
            </div>
        );

    }


}

export default Users;