import React from 'react'
import s from './Users.module.css'
import userPhoto from './../assets/userPhoto.jpg'
import { NavLink } from 'react-router-dom';
const User = ({ user, followingprocess, unfollow, follow }) => {
    return (
        <div className={s.users} >
            <span className={s.spans}>
                <div>
                    <NavLink to={'/Profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="ava" />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingprocess.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)

                        }}>unfollow</button> :
                        <button disabled={followingprocess.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>follow</button>
                    }
                </div>
            </span>
            <span >
                <span className={s.spans}>
                    <div className={s.firstColumn}>
                        {user.name}
                    </div>
                    <div className={s.firstColumn}>
                        {user.status}
                    </div>
                </span>
                <span >
                    <div>{'country'}</div>
                    <div>{'citiname'}</div>
                </span>
            </span>
        </div>
    )
}
export default User;

