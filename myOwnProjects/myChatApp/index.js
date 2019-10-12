const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 3000;

server.listen(port, () => {
    console.log('server is running on port:', port);
});

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/public/indexx.html');
});

io.on('connection', (socket)=>{
    console.log('a user has joined');
});

const tech = io.of('/tech');

tech.on("connection", (socket)=> {
    socket.on('join', (data) => {
        socket.join(data.room);
        tech.in(data.room).emit('message', 'new user joined !');
    })
        socket.on('message', (data)=>{
        tech.in(data.room.emit('message', data.msg));
    })
    
        io.on('disconnect', ()=> {
         console.log("user is disconnected");
         tech.emit('message', 'user is disconnected');

        });
});




