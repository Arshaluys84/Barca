import React from 'react'
import s from './Users.module.css'
import userPhoto from './../assets/userPhoto.jpg'
const Users = (props) => {
    if (props.users.length === 0)
        props.setUsers([
            {
                id: 3, photos: 'https://yt3.ggpht.com/ytc/AAUvwnhg42VC9nY4nAs7bKkxO_mbDwvzKGuHEqQg_NoQuQ=s900-c-k-c0x00ffffff-no-rj',
                followed: false, name: 'Arsh A', status: 'I am ok', location: { country: 'Spain', citiname: 'Barca' }
            },
            {
                id: 2, photos: 'https://yt3.ggpht.com/ytc/AAUvwnhg42VC9nY4nAs7bKkxO_mbDwvzKGuHEqQg_NoQuQ=s900-c-k-c0x00ffffff-no-rj',
                followed: false, name: 'Elen', status: 'I am the best hamovik', location: { country: 'Armenia', citiname: 'Yerevan' }
            }
        ])
    return (
        <div>
            {
                props.users.map(u =>
                    <div className={s.users} key={u.id}>
                        {console.log(props.users.length)}
                        <div>
                            <span className={s.spans}>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava" />
                                </div>
                                <div>

                                    {u.followed
                                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                        <button onClick={() => props.follow(u.id)}>Follow</button>
                                    }
                                </div>
                            </span>
                            <span >
                                <span className={s.spans}>
                                    <div className={s.firstColumn}>
                                        {u.name}
                                    </div>
                                    <div className={s.firstColumn}>
                                        {u.status}
                                    </div>
                                </span>
                                <span >
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.citiname'}</div>
                                </span>
                            </span>
                        </div>
                        {console.log(props.users.length)}
                    </div>
                )
            }
        </div>
    )

}

export default Users;