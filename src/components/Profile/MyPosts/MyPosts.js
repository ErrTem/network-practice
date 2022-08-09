import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
    // let postsElements =
    //     props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
        // <div className={s.postsBlock}>
        //     <h3>My posts</h3>
        //     <div className={s.posts}>
        //         {postsElements}
        //     </div>
        // </div>
    )
}


export default MyPosts;