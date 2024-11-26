import { io } from "socket.io-client";
import readline from "readline";
const socket = io("http://localhost:3000");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

socket.on("message", (message) => {
  console.log(`Broadcast message: ${message}`);
});

console.log("Type a message to broadcast:");
rl.on("line", (input) => {
  socket.emit("message", input);
});
