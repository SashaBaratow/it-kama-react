import React from 'react';
import stylesProfile from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfilInfo/ProfileInfo";
function Profile(props){
    return(
        <div className={stylesProfile.profile_block}>
            <h1>this is profile page</h1>
            <div>
                <ProfileInfo/>
                <MyPosts postData = {props.state.posts}/>
            </div>
        </div>
    )
}
export default Profile