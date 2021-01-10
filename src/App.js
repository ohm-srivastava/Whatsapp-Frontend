import './App.css';
import ChatRoom from './ChatRoom';
import RoomList from './RoomList';
import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';
import axios from './Axios'

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then(response => {
    setMessages(response.data)
    })
  }, [])
  
  useEffect(() => {
    const pusher = new Pusher('1dda3cfe66bdb72fabb6', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe("message");
    channel.bind('inserted', function(data) {
      setMessages([...messages, data])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])


  return (
    <div className="App">
      <div className = "app-contents">
      <RoomList />
      <ChatRoom messages ={messages}/>
      </div>

    </div>
  );
}

export default App;
