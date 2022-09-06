import React from 'react';
import stylesDialog from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";

const Dialog = (props) => {
    console.log(props.state)
    let singleUserComponent = props.state.usersData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} key={dialog.id}/> )
    let singleDialogComponent = props.state.dialogsData.map((m)=>{
        return <MessageItem  message = {m.massage} key={m.id} />
    })
    return (
        <div className={stylesDialog.dialog__page}>
            <h1>this is Dialog Page</h1>
            <div className={stylesDialog.dialog}>
                <div className={stylesDialog.dialogs__items}>
                    {singleUserComponent}
                </div>
                <div className={stylesDialog.messages}>
                    {singleDialogComponent}
                </div>
            </div>
        </div>
    )
}
export default Dialog