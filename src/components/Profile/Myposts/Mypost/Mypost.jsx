import React from 'react';
import s from './Mypost.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img className={`${s.item} ${s.avatar}`} src="https://i.pinimg.com/150x150/89/95/23/89952397a62bb2e27440abdb2fb82020.jpg" alt="messi" />
      {props.message}
      <div>
        <img className={`${s.item} ${s.like}`} src="https://image.similarpng.com/very-thumbnail/2020/06/Thumb-up-like-icon-social-media-clipart-PNG.png" alt="like" />
        <span>like</span>{props.like}
      </div>
    </div>
  )
}

export default Post;
