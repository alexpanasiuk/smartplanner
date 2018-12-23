import { combineReducers } from 'redux';
import user from './user_reducer';
import projects from './projects_reducer';

const rootReducer = combineReducers({
    user,
    projects
});

export default rootReducer;