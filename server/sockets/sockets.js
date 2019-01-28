module.exports = function(io){
    let usersMap = new Map();

    io.sockets.on('connection', function (socket) {

        socket.on('projectUpdated', data => {
            
            const {project, type} = data;
            const recipients = [project.creator, ...project.members];
            for (let userId of recipients) {
                if (usersMap.has(userId)) {
                    const userSocket = usersMap.get(userId);
                    if (userSocket.id === socket.id) continue;
                    if (userSocket.disconnected) {
                        usersMap.delete(userSocket.id)
                    } else {
                        userSocket.emit('projectUpdated', {
                            project,
                            type
                        });
                    }
                }
            }
        });

        socket.on('register', function (user) {
            usersMap.set(user.id, socket);
        });
    });
  }