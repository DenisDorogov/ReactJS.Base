import React from 'react';
import style from './users.module.css';
import defaultPhoto from '../../assets/img/defaultUser.png';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

const Users = (props) => { //Чистый функциональный компонент
    let getPagesNumbers = () => {
        let countAllPages = Math.ceil(props.totalCount / props.countOnPage);
        let pageItems = [];
        for (let i = 1; i <= countAllPages; i++) {
            pageItems.push(i);
        }
        return pageItems;
    }

    let checkFollow = (followed, id) => {
        if (followed) {
            return (
                <button className={style.followButton}
                        onClick={() => props.unfollow(id)}
                >unfollow</button>
                )
        } else {
            return (
                <button className={style.followButton}
                        onClick={() => props.follow(id)}
                >follow</button>
            );
        }
    }

    return (
        <>
        { props.isLoading ? <Preloader /> : null }
        <div className={style.wrapper}>
            <div className={style.pageBox}>
                {getPagesNumbers().map((page) => {
                    if (page === props.currentPage) {
                        return (
                            <div className={`${style.currentPage} ${style.page}`}>{page}</div>
                        )
                    } else {
                        return (
                            <div className={style.page} onClick={() => props.setCurrentPage(page)}>{page}</div>
                            
                        )
                    }
                })}
            </div>

            {props.users.map((u) => {
                return (
                    <div className={style.userBox} key={u.id}>
                        <NavLink to={'/profile/' + u.id }>
                        <img src={u.photos.small != null ? u.photos.small : defaultPhoto}
                            alt={u.name} />
                        </NavLink>
                        <div className={style.userInfo}>
                            <p>{u.name}</p>
                            <p>{u.status}</p>
                            {/* <p>{u.location.city}</p>
                            <p>{u.location.country}</p> */}
                        </div>
                        {checkFollow(u.followed, u.id)}
                    </div>
                )
            })}
        </div>
        </>
    );
}

export default Users;