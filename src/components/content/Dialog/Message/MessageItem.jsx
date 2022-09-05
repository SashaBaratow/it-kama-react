import stylesDialog from "../Dialog.module.css";
import React from "react";

const MessageItem = (props) => {
    return (
        <article className={stylesDialog.message__item}>
            {props.message}
        </article>
    )
}
export default MessageItem