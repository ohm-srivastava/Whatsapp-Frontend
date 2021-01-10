import { Avatar, IconButton } from '@material-ui/core'
import {DonutLargeRounded, MessageRounded, MoreVertRounded, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import ChatList from './ChatList'
import "./RoomList.css"
function RoomList() {
    return (
        <div className = "RoomList">
            <div className = "header-roomlist"> 
            <Avatar src = "https://media-exp1.licdn.com/dms/image/C5603AQFGkH3XJC0mug/profile-displayphoto-shrink_200_200/0/1596008285936?e=1615420800&v=beta&t=LG3yp8qeszE-pyMStDwfDx3H3J4H6dk8r2Y8Y3CiM3A" />
            <div className = "right-part">
                <IconButton>
                    <DonutLargeRounded />
                </IconButton>
                <IconButton>
                    <MessageRounded />
                </IconButton>
                <IconButton>
                    <MoreVertRounded />
                </IconButton>

            </div>
            
            </div>
            <div className = "search">
                <div className = "search-container">
                    <SearchOutlined />
                    <input placeholder = "Search for a chat" type = "text"/>
                </div>
            </div>

            <div className = "chats">
                <ChatList />
                <ChatList />
                <ChatList />
            </div>

        </div>
    );
}

export default RoomList