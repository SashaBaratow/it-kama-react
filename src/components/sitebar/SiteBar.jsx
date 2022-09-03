import React from 'react';
import stylesSiteBar from './SiteBar.module.css'
import {NavLink} from "react-router-dom";

function SiteBar() {
    return (
        <div className={stylesSiteBar.sitebar_block}>
            <h1>this is sitebar</h1>
            <ul>
                <li><NavLink  to="/profile" className={(navData) => (navData.isActive ? stylesSiteBar.active : 'none')}>Profile</NavLink></li>
                <li><NavLink  to="/dialog"  className={(navData) => (navData.isActive ? stylesSiteBar.active : 'none')}>Messages</NavLink></li>
            </ul>
        </div>
    )
}

export default SiteBar