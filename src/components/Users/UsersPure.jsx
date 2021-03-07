import React from 'react'
import Paginator from '../common/Paginator.jsx';
import User from './User';
const UsersPure = (props) => {
    return (
        <div>
            <Paginator totalCount={props.totalCount} currentPage={props.currentPage}
                onChanged={props.onChanged} count={props.count} />

            {    props.users.map(user => <User key={user.id} user={user}
                followingprocess={props.followingprocess} unfollow={props.unfollow}
                follow={props.follow} />)}
        </div>
    )
}
export default UsersPure;

