import { connect } from 'react-redux';
import { setUsers, setCurrentPage, follow, unfollow, setTotalCount, setPreloader, getUsers, getCurrentUsers } from '../../redux/usersReducer';
import React from 'react'
import UsersPure from './UsersPure'
import Preloader from '../common/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAthRedirect';
import { getUsersSelector, getTotalCount, getCount, getCurrentPage, getIsFetching, getFollowingprocess } from '../../redux/selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count, this.props.totalCount)
    };
    onChanged = (pn) => {
        this.props.getCurrentUsers(pn, this.props.count)
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <UsersPure onChanged={this.onChanged}
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    count={this.props.count}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    currentPage={this.props.currentPage}
                    followingprocess={this.props.followingprocess}
                />
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        totalCount: getTotalCount(state),
        count: getCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingprocess: getFollowingprocess(state),
    };
};
let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setPreloader,
    getUsers,
    getCurrentUsers

};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(UsersContainer)
