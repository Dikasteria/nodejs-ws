const Websocket = require('ws');

const wss = new Websocket.Server({port: 4000});
console.log('Server listening on port ' + wss.options.port )

wss.on('connection', function connection(ws, req) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message + ' from:', req.connection.remoteAddress);
    });
    ws.send('Returning your client message from the server')
});