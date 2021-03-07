import React from 'react';
import { reduxForm } from 'redux-form';
import { formCreator, Input, Textarea } from '../../common/FormControl';
import s from '../../common/FormControl.module.css'

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return <div>
    <form onSubmit={handleSubmit}>
      {error && <div className={s.summeryError}>{error} </div>}
      <button >SAVE</button>
      <div>FullName:{formCreator("Full Name", "FullName", Input, [])}</div>
      <div>lookingForAJob:{formCreator("", "lookingForAJob", Input, [], { type: "checkbox" })}</div>
      <div>lookingForAJobDescription:{formCreator("lookingForAJobDescription", "lookingForAJobDescription",
        Textarea, [])}</div>
      <div>aboutMe:{formCreator("aboutMe", "aboutMe", Textarea, [])}</div>
      {<div>Contacts:{Object.keys(profile.contacts).map(key => {
        return <div key={key}> {key} {formCreator(key, "contacts." + key, Input, [])}</div>

      })}</div>}
    </form>
  </div>
}
const ProfileDataFormRedux = reduxForm({ form: 'editeProfile' })(ProfileDataForm)
export default ProfileDataFormRedux;
