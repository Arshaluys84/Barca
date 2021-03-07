import React, { useState } from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import anonim from '../../assets/anonim.png';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import ProfileDataFormRedux from './ProfileDataForm';

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false)
  if (!props.profile) {
    return <Preloader />
  }
  const OnupdatePhoto = (e) => {
    if (e.target.files.length) {
      props.updatePhoto(e.target.files[0])
    }
  }
  let onSubmit = async (formData) => {
    props.saveProfile(formData).then((...rest) => {
      setEditMode(false)
    })
  }
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <div>
          <img src={props.profile.photos.large || anonim} alt={`${props.profile.userId}   must be here`} />
          {props.isOwner && <input type="file" onChange={OnupdatePhoto} />}
          <ProfileStatusWithHook {...props} status={props.status} updateStatus={props.updateStatus} />
          {editMode ?
            <ProfileDataFormRedux initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} />
            : <ProfileData profile={props.profile} isOwner={props.isOwner}
              goToEditMode={() => { setEditMode(true) }} />}
        </div>
      </div>
    </div>
  )
}
const Contacts = ({ contactName, contactValue }) => {
  return <div>
    {contactName} :{contactValue}
  </div>
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <button onClick={goToEditMode}>EDIT</button>}
    <div>FullName:{profile.fullName}</div>
    <div>{profile.userId}</div>
    <div>lookingForAJob:{profile.lookingForAJob ? "yes" : "no"}</div>
    <div>lookingForAJobDescription:{profile.lookingForAJobDescription}</div>
    <div>aboutMe:{profile.aboutMe}</div>
    <div>Contacts:{Object.keys(profile.contacts).map(key => {
      return <Contacts key={key} contactName={key}
        contactValue={profile.contacts[key]} />
    })}</div>
  </div>
}
export default ProfileInfo;
