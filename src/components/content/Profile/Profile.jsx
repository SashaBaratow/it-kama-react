import React from 'react';
import stylesProfile from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfilInfo/ProfileInfo";
function Profile(){
    return(
        <div className={stylesProfile.profile_block}>
            <h1>this is profile page</h1>
            <div>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </div>
    )
}
export default Profile