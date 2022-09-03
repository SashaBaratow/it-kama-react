import React from 'react';
import stylesDialog from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const SingleDialog = (props) => {
    let path = "/dialog/" + props.id
    return(
        <div className={stylesDialog.dialogs__item}>
            <NavLink to={path} className={(navData) => (navData.isActive ? stylesDialog.active : 'none')} >{props.name}</NavLink>
        </div>
    )
}
const SingleMessage = (props) => {
    return (
        <article className={stylesDialog.message__item}>
            {props.message}
        </article>
    )
}
const Dialog = () => {
    return (
        <div className={stylesDialog.dialog__page}>
            <h1>this is Dialog Page</h1>
            <div className={stylesDialog.dialog}>
                <div className={stylesDialog.dialogs__items}>
                    <SingleDialog name = 'User 1' id = '1'/>
                    <SingleDialog name = 'User 2' id = '2'/>
                    <SingleDialog name = 'User 3' id = '3'/>
                </div>
                <div className={stylesDialog.messages}>
                    <SingleMessage  message = 'hi' />
                    <SingleMessage  message = 'how are you?' />
                    <SingleMessage  message = 'are you in Bishkek?' />
                </div>
            </div>
        </div>
    )
}
export default Dialog