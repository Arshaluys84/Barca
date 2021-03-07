import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControl';
import Post from './Mypost/Mypost';
import s from './Myposts.module.css';

const maxLength20 = maxLengthCreator(20);
const NewPostForm = React.memo((props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} placeholder="Enter Your message" name="newPostText"
          validate={[required, maxLength20]} />
      </div>
      <div>
        <button >Add post</button>
        <button>Delete post</button>
      </div>
    </form>
  )
})
const NewPostFormRedux = reduxForm({ form: 'postNewPostForm' })(NewPostForm)
const Myposts = React.memo((props) => {
  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }
  let PostsEl = props.Posts.map(p =>
    <Post message={p.message} like={p.like} key={p.id} />,
  )
  return (
    <div className={s.content} >
      <div className={s.descripition}>
        <h2>myposts</h2>
        <NewPostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>
        {PostsEl}
      </div>
    </div>
  )
})
export default Myposts;

