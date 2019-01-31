import io from 'socket.io-client';

export default function socketMiddleware(url) {
    let socket;
    const isProjectUpdated = ['ADD_TASK', 'UPDATE_TASK', 'DELETE_TASK', 'UPDATE_PROJECT', 'DELETE_PROJECT'];

    return storeAPI => next => action => {
        switch(action.type) {
            case "CONNECT_TO_SOCKET": {
                    initSocket();
                break;
            }
            case "LOGOUT_USER": {
                if (socket) socket.disconnect();
                break;
            }
            default:
                break;
        }
        
        // Check if project was updated
        for (let actionType of isProjectUpdated) {
            if (actionType === action.type && action.payload.success) {
                socket.emit('projectUpdated', {
                    type: action.type,
                    project: action.payload.project
                });
            }
        } 

        return next(action);

    
        function initSocket() {
            socket = io.connect(url);
            socket.emit('register', action.payload);

            socket.on('projectUpdated', data => {
                next({
                    type: data.type, 
                    payload: {
                        project: data.project
                    }
                });
            });
        }
    }
}