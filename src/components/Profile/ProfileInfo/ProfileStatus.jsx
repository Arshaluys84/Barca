import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status)
  }
  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }
  render() {
    return (
      <div className={s.status}>
        { (!this.state.editMode) ?
          <div>
            <span onDoubleClick={this.activateEditMode}> {this.props.status || 'What you think?'}</span>
          </div>

          : <div>
            <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactivateEditMode} defaultValue={this.state.status} />
          </div>}
      </div>
    )
  }
}
export default ProfileStatus;
