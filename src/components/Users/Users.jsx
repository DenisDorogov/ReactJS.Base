import React from 'react';
import style from './users.module.css'


const Users = (props) => {
    console.log('props.users.length ' , props.users.length)
    let img = "https://imgaz.staticbg.com/customers_avatars/20181219104152_503.jpg"
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    img: img,
                    followed: false,
                    name: 'Petya',
                    status: 'online',
                    location: {city: 'St. Peterburg', country: 'Russia'}
                },
                {
                    id: 2,
                    img: img,
                    followed: true,
                    name: 'Vasya',
                    status: 'offline',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    img: img,
                    followed: false,
                    name: 'Nikita',
                    status: 'offline',
                    location: {city: 'Murmansk', country: 'Russia'}
                }
            ]
        )
    }
    

    const checkFollow = (followed, id) => {
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
        <div className={style.wrapper}>
            
            {props.users.map((u) => { 
                return (
                <div className={style.userBox}>
                    <img src={u.img} alt={u.name}/>
                    <div className={style.userInfo}>
                        <p>{u.name}</p>
                        <p>{u.status}</p>
                        <p>{u.location.city}</p>
                        <p>{u.location.country}</p>
                    </div>
                    {checkFollow(u.followed, u.id)}
                    {console.log('u: ', u)}
                    
                </div>
            )})}
        </div>
    );
};


export default Users;