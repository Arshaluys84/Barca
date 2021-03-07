import * as axios from 'axios'
import React from 'react'
import UsersPure from './UsersPure'
class ClassUsers extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response.data.totalCount)
                this.props.setTotalCount(Math.ceil(response.data.totalCount / 200))
            })
    }
    onChanged = (pn) => {
        this.props.setCurrentPage(pn)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pn}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return (
            <UsersPure onChanged={this.onChanged}
                users={this.props.users}
                setUsers={this.props.setUsers}
                setTotalCount={this.props.setTotalCount}
                totalCount={this.props.totalCount}
                count={this.props.count}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
            />
        )
    }
}
export default ClassUsers;