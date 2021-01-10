import { Avatar, Button, ButtonBase, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MicNoneRounded, MoreVertRounded, SearchOutlined, SendRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import "./ChatRoom.css"
import axios from "./Axios"
function ChatRoom({messages}) {
    const [input, setInput] = useState("")
    
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post("/messages/new", {
            message: input,
            name: "Ohm",
            timestamp: "test",
            received: false,

        })
        setInput("")

    }

    
    return (
        <div className = "ChatRoom">
            <div className = "chat-header">
                <Avatar />
            
            <div className = "room-info">
                <h3> Room Name </h3>
                <p>Members...</p>

            </div>

            <div className = "chat-header-right">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVertRounded />
                </IconButton>

            </div>



            </div>
            <div className = "messages">
                {messages.map((message) => (
                    <p className = {'one-message'}>
                        <span className = 'chat_name'>{message.name}</span>
                        {message.message}
                        <span className = "time-sent">{message.timestamp}</span>
                    </p>
                )

                ) }
            </div>

            <div className = "chat-footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input value = {input} onChange ={(e) => {setInput(e.target.value)}}placeholder = "Enter a message" type = "text"/>
                    <button onClick ={sendMessage} type = "submit"> Enter A Message</button>
                </form>
                <IconButton>
                <MicNoneRounded />
                </IconButton>
            </div>


        </div>
    );
}

export default ChatRoom