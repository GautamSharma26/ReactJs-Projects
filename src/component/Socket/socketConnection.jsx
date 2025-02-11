import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');  // Connect to the backend

const SocketComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Listen for the 'response' event from the server
    socket.on('response', (data) => {
    console.log(data.message)
      setMessage(data.message);
    });

    // Clean up when the component is unmounted
    return () => {
      socket.off('response');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', { content: 'Hello from React!' });
  };

  const demoMessage =()=>{
    socket.emit('backend',{content:"Testing from backend"})
  }

  return (
    <div>
      <h1>Socket Communication</h1>
      <button onClick={sendMessage}>Send Message</button><br></br>
      <button onClick={demoMessage}>Demo Message</button>
      <p>Message from server: {message}</p>
    </div>
  );
};

export default SocketComponent;
