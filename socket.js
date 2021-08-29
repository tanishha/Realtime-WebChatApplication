module.exports = (server) => {
    const io = require('socket.io')(server.listen(7070, () => {
        console.log("Server is active...")
    }), {
        cors: {
            origin: "*"
        }
    })
    let users = []; //info is pushed into array

    const addUser = (userId, socketId) => { //userId is googleId
        console.log('hi', userId, socketId);
        !users.some(user => user.userId === userId) //check if that user already exits or not using filter
            &&
            users.push({
                userId,
                socketId
            });
    }
    const getUsers = (userId) => {
        console.log(users);
        return users.find(user => user.userId === userId);
    }
    const removeUser = (socketId) => {
        users = users.filter(user => user.socketId !== socketId);
    }
    io.on("connection", (client) => { //function is called for each new user and dedicated connection is created for each user
        console.log("Socket is active to be connected")
        //connect
        client.on("addUser", userId => {
            addUser(userId, client.id);
            io.emit("getUsers", users);
        })
        //send message
        client.on('sendMessage', ({
            senderId,
            receiverId,
            text
        }) => {
            const user = getUsers(receiverId);
            io.to(user.socketId).emit('getMessage', {
                senderId,
                text
            })
        })
        //disconnect
        client.on('disconnect', () => {
            console.log('user disconnected');
            removeUser(socket.id);
            io.emit('getUsers', users);
        })
    })
}