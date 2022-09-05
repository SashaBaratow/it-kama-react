import stylesDialog from "../Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id
    return(
        <div className={stylesDialog.dialogs__item}>
            <NavLink to={path} className={(navData) => (navData.isActive ? stylesDialog.active : 'none')} >{props.name}</NavLink>
        </div>
    )
}
export default DialogItem