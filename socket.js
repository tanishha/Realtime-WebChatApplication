module.exports = (server) => {
    const io = require('socket.io')(server.listen(7070, () => {
        console.log("Server is active...")
    }), {
        cors: {
            origin: "*"
        }
    })
    let users = [];

    io.on("connection", (client) => {  //function is called for each new user and dedicated connection is created for each user
        console.log("Socket is active to be connected")  
        client.on("new_msg", (payload) => {
            client.emit('reply-msg', payload)
        })
    })
}