
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {origin: "*"}
});

io.on('connection', (socket, name) => {

   socket.on('passName', name => {
        gueestName = name
   })

    socket.on('message', (message) => {
 
  
        io.emit('message', ` ${gueestName} pisze: ${message}`)
    })
})

server.listen(8080, () => console.log('słucha'))
