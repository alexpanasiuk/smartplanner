export default function(state = [], action) {
    let newState;
    switch (action.type) {

        case 'GET_PROJECTS':
            return Array.isArray(action.payload) ? [...action.payload] : state;
        
        case 'ADD_TASK':
            newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i]._id === action.payload.project._id) {
                    newState[i] = action.payload.project;
                }
            }
            return newState;
        
        case 'UPDATE_TASK': 
            newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i]._id === action.payload.project._id) {
                    newState[i] = action.payload.project;
                    break;
                }
            }
            return newState;

        case 'DELETE_TASK': 
            newState = [...state];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i]._id === action.payload.project._id) {
                    newState[i] = action.payload.project;
                    break;
                }
            }
            return newState;

            case 'ADD_PROJECT': 
                return [...state, action.payload.project]

            case 'UPDATE_PROJECT': 
                newState = [...state];
                for (let i = 0; i < newState.length; i++) {
                    if (newState[i]._id === action.payload.project._id) {
                        newState[i] = action.payload.project;
                        break;
                    }
                }
                return newState;
                
            case 'DELETE_PROJECT': 
                newState = [];
                for (let i = 0; i < state.length; i++) {
                    if (action.payload.project && (state[i]._id !== action.payload.project._id)) {
                        newState.push(state[i]);
                    }
                }
                return newState;
            default:
                return state;
    }
}