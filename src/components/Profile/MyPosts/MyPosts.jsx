import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
    let postsElements =
        props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);


    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        

    }

    let addPost = () => {
        props.addPost();

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}


export default MyPosts;