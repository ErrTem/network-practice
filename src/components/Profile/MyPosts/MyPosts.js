import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
    let postsElements =
        props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>BEBRA</h3>
            <div>
                <textarea></textarea>
            </div>
            <ProfileInfo />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}


export default MyPosts;