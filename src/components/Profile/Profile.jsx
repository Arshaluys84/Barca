import React from 'react';
import MypostsContainer from './Myposts/MypostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo isOwner={props.isOwner}
        updatePhoto={props.updatePhoto} saveProfile={props.saveProfile}
        profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MypostsContainer />
    </div>
  )
}

export default Profile;
