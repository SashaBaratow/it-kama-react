import React from 'react';
import stylesProfile from './MyPosts.module.css'
import Post from "./Post/Post";
function MyPosts(props){
    let postComponent = props.postData.map(p => <Post message ={p.message} likeCount = {p.likeCount} key={p.id}/>)
    let newText = React.createRef()
    let addPost = ()=>{
        let text = newText.current.value
        alert(text)
    }
    return(
       <div className={stylesProfile.my__posts}>
           <div className={stylesProfile.add__post}>
               <textarea ref={newText} name="" id="" cols="30" rows="5"></textarea>
               <button onClick={addPost}>Add post</button>
           </div>
           {postComponent}
       </div>
    )
}
export default MyPosts