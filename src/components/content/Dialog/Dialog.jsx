import React from 'react';
import stylesDialog from './Dialog.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";



const Dialog = () => {
    let usersData = [
        {id:1, name: 'Bob' },
        {id:2, name: 'Fil' },
        {id:3, name: 'Patrick' },
        {id:4, name: 'John' },
    ]
    let dialogsData = [
        {id: 1, massage: 'Hey!'},
        {id: 2, massage: 'How are you?'},
        {id: 3, massage: 'Are you here?'},
        {id: 4, massage: 'Man!?'},
    ]

    let singleUserComponent = usersData.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} key={dialog.id}/> )
    let singleDialogComponent = dialogsData.map((m)=>{
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