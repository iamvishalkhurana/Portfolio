const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const PORT = 3000 || process.env.PORT;

const users = [{}];

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Its Working!</h1>");
});

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  socket.on("joined", ({ user }) => {
    users[socket.id] = user;

    socket.emit("welcome", { user: "Admin", message: "Welcome to the chat" });

    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: `${users[socket.id]} has joined`,
    });
  });

  socket.on("message", ({ message, id }) => {
    io.emit("sendMessage", { user: users[id], message, id });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
