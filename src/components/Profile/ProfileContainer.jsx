import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import s from './Profile.module.css';
import { getProfile, getStatus, updateStatus, updatePhoto, saveProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  refreshProfile = () => {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.id
    }
    if (!userId) {
      this.props.history.push('/login')
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }
  render() {
    return (
      <div className={s.content}>
        <Profile {...this.props} profile={this.props.profile}
          status={this.props.status} updateStatus={this.props.updateStatus}
          saveProfile={this.props.saveProfile}
          isOwner={!this.props.match.params.userId} updatePhoto={this.props.updatePhoto} />
      </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    id: state.auth.id,
    isAuth: state.auth.isAuth,

  }
}
let mapDisptchToProps = {
  getProfile,
  getStatus,
  updateStatus,
  updatePhoto,
  saveProfile
}
export default compose(
  connect(mapStateToProps, mapDisptchToProps),
  withRouter,
)(ProfileContainer)

