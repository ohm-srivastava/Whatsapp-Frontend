import {Avatar} from "@material-ui/core"
import React from 'react'
import "./ChatList.css"
function ChatList() {
    return (
        <div className = "ChatList">
            <Avatar />
            <div className = "chat-info">
                <h2>name</h2>
                <p>chat</p>

            </div>
        </div>
    );
}

export default ChatList