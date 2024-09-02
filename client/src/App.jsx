import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);
  const [socketId, setSocketId] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const newSocket = io("https://chat-app-nuar.onrender.com");
    setSocket(newSocket);

    newSocket.on("connect", () => {
      setSocketId(newSocket.id);
    });

    newSocket.on("receive-message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleJoinRoom = () => {
    if (socket) {
      socket.emit("join-room", room);
    }
  };

  const sendMessage = () => {
    if (!message.trim()) {
      return;
    }
    if (socket) {
      socket.emit("message", message, room);
    }
    setMessage("");
  };

  return (
    <div className="chat-box-container">
      <div className="chat-box">
        <div className="socketId">Socket Id is {socketId}</div>
        {messages.map((msg, index) => (
          <p className="message" key={index}>
            {msg}
          </p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type Your Message here...."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
          }
        }}
      />
      <input
        type="text"
        placeholder="Room Name"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleJoinRoom();
          }
        }}
      />
    </div>
  );
}

export default App;
