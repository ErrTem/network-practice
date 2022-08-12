import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}> 
            <img src="https://previews.123rf.com/images/chekman/chekman1809/chekman180900197/107863628-path-icon-in-flat-style-vector-illustration-route-way-or-track-symbol.jpg" alt="eee" />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;