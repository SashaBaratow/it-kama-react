import React from 'react';
import stylesProfile from './ProfileInfo.module.css'
function ProfileInfo(){
    return(
        <div className={stylesProfile.profile_block}>
            <div className={stylesProfile.left}>
                <img src="https://www.profilepersonnel.co.za/wp-content/uploads/2021/09/profile-personnel-welcome.png" alt=""/>
            </div>
            <div className={stylesProfile.right}>
                <h1 className={stylesProfile.name}>Baratov A.A</h1>
                <article>
                    Frontend developer
                </article>
            </div>

        </div>
    )
}
export default ProfileInfo