import React from 'react';
import stylesProfile from './MyPosts.module.css'
import Post from "./Post/Post";
function MyPosts(){
    return(
       <div className={stylesProfile.my__posts}>
           <div className={stylesProfile.add__post}>
               <textarea name="" id="" cols="30" rows="5"></textarea>
               <button>Add post</button>
           </div>
           <Post message = "it's my first Post" likeCount = '5'/>
           <Post message = "Hi My name is Bob Singer!)" likeCount = '23'/>
       </div>
    )
}
export default MyPosts