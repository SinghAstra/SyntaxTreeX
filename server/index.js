import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const PORT = 5000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.json({ message: "Chat API is Running" });
});

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("message", (message, room) => {
    if (room) {
      console.log(`Message received ${message} from ${socket.id} @${room}`);
      io.to(room).emit("receive-message", message);
    } else {
      console.log(`Message received ${message} from ${socket.id}`);
      io.emit("receive-message", message);
    }
  });

  socket.on("join-room", (room) => {
    console.log(`${socket.id} joined room ${room}`);
    socket.join(room);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
