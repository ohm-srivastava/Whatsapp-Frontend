import {Avatar} from "@material-ui/core"
import React from 'react'
import "./ChatList.css"
function ChatList(prop) {
    return (
        <div className = "ChatList">
            <Avatar src = "https://cdn.vox-cdn.com/thumbor/9iDZLE7-TDv1iewdKHOUlbSmXK0=/0x0:5563x3709/920x613/filters:focal(2302x1311:3192x2201):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65752607/1048232144.jpg.0.jpg"/>
            <div className = "chat-info">
                <h2>Chat Group</h2>
                <p>Last Message</p>

            </div>
        </div>
    );
}

export default ChatList