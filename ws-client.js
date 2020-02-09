const WebSocket = require('ws');
 
const ws = new WebSocket('ws://localhost:4000');
 
ws.on('open', function open() {
  ws.send('Please send me something back');
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});