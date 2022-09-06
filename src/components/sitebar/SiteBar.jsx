import React from 'react';
import stylesSiteBar from './SiteBar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./friend/Friend";

function SiteBar(props) {
    console.log(props.state.friends)
    let friend = props.state.friends.map(friendItems =>  <Friend state={friendItems.name}  key={friendItems.id}/>)
    return (
        <div className={stylesSiteBar.sitebar_block}>
            <h1>this is sitebar</h1>
            <ul>
                <li><NavLink  to="/profile" className={(navData) => (navData.isActive ? stylesSiteBar.active : 'none')}>Profile</NavLink></li>
                <li><NavLink  to="/dialog"  className={(navData) => (navData.isActive ? stylesSiteBar.active : 'none')}>Messages</NavLink></li>
            </ul>
            <div className={stylesSiteBar.friends}>
                <h5>Friends</h5>
                <div>{friend}</div>
            </div>


        </div>
    )
}

export default SiteBar