import axios from 'axios'


export function registerUser({email, password, name}) {
    const request = axios.post('/api/register', {email, password, name})
        .then(response => response.data);
    return {
        type: 'REGISTER_USER',
        payload: request
    }
}

export function loginUser({email, password}) {
    const request = axios.post('/api/login', {email, password})
        .then(response => response.data);
    return {
        type: 'LOGIN_USER',
        payload: request
    }
}

export function logOut() {
    const request = axios.get('/api/logout')
        .then(response => response.data);
    return {
        type: 'LOGOUT_USER',
        payload: request
    }
}

export function auth() {
    const request = axios.get('/api/auth')
        .then(response => response.data);
    return {
        type: 'AUTH',
        payload: request
    }
}


export function getProjects() {
    const request = axios.get('/api/getProjects')
        .then(response => response.data);
    return {
        type: 'GET_PROJECTS',
        payload: request
    }
}

export function addTask({name, creator, finishTime, projectId}) {
    const request = axios.post('/api/addTask', {name, creator, finishTime, projectId})
        .then(response => response.data);
    return {
        type: 'ADD_TASK',
        payload: request
    }
}

export function updateTask({taskId, projectId, name, creator, timeSetted, finished, finishTime}) {
    const request = axios.post('/api/updateTask', {taskId, name, creator, finished, timeSetted, finishTime, projectId})
        .then(response => response.data);
    return {
        type: 'UPDATE_TASK',
        payload: request
    }
}

export function deleteTask({taskId, projectId}) {
    const request = axios.delete('/api/deleteTask', {data:{taskId, projectId}})
        .then(response => response.data);
    return {
        type: 'DELETE_TASK',
        payload: request
    }
}


export function addProject({name, creator}) {
    const request = axios.post('/api/addProject', {name, creator})
        .then(response => response.data);
    return {
        type: 'ADD_PROJECT',
        payload: request
    }
}

export function updateProject({projectId, name}) {
    const request = axios.post('/api/updateProject', {projectId, name})
        .then(response => response.data);
    return {
        type: 'UPDATE_PROJECT',
        payload: request
    }
}

export function deleteProject({projectId}) {
    const request = axios.delete('/api/deleteProject', {data: {projectId}})
        .then(response => response.data);
    return {
        type: 'DELETE_PROJECT',
        payload: request
    }
}

export function addComment({projectId, taskId, text}) {
    const request = axios.post('/api/addComment', {projectId, taskId, text})
        .then(response => response.data);
    return {
        type: 'ADD_COMMENT',
        payload: request
    }
}

export function connectToSocket(user) {
    return {
        type: 'CONNECT_TO_SOCKET',
        payload: user
    }
}