import React from 'react';
import stylesProfile from './MyPosts.module.css'
import Post from "./Post/Post";
function MyPosts(){

    let posts = [
        {id:1, message: 'it\'s my first Post', likeCount: 34},
        {id:2, message: 'Hi My name is Bob Singer!', likeCount: 4},
    ]
     let postComponent = posts.map(p =>  <Post message ={p.message} likeCount = {p.likeCount} key={p.id}/>)


    return(
       <div className={stylesProfile.my__posts}>
           <div className={stylesProfile.add__post}>
               <textarea name="" id="" cols="30" rows="5"></textarea>
               <button>Add post</button>
           </div>
           {postComponent}
       </div>
    )
}
export default MyPosts