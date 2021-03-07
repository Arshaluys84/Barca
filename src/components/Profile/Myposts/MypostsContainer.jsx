import { connect } from 'react-redux';
import { addPostCreater } from '../../../redux/profileReducer';
import Myposts from './Myposts';
const mapStateToProps = (state) => {
  return {
    Posts: state.ProfilePage.Posts,
    newPostText: state.ProfilePage.newPostText,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostCreater(newPostText))
    },
  }
}
const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);
export default MypostsContainer;
