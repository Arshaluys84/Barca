import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHook = React.memo((props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  useEffect(
    () => {
      setStatus(props.status)
    }, [props.status]
  )
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <div className={s.status}>
      { (!editMode) ?
        <div>
          <span onDoubleClick={activateEditMode}> {props.status || 'What you think?'}</span>
        </div>
        : <div>
          <input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode} defaultValue={status} />
        </div>
      }
    </div>
  )
})
export default ProfileStatusWithHook;
