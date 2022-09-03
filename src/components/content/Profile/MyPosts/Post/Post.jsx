import React from 'react';
import stylesPost from './Post.module.css'
const Post =(props)=>{
    return(
        <div className={stylesPost.posts__post}>
           <div className={stylesPost.content}> <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" alt=""/>
               <a href="#s">{props.message}</a>
           </div>
            <span>Likes = {props.likeCount}</span>
        </div>
    )
}
export default Post