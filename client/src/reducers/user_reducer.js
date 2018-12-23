export default function(state = {}, action) {
    switch (action.type) {

        case 'LOGIN_USER':
            return {
                ...action.payload
            }

        case 'LOGOUT_USER':
            return { }

        case 'REGISTER_USER':
            return {
                ...state,
                ...action.payload
            }
        case 'AUTH':
            return {
                ...action.payload
            }

        default:
            return state;
    }
}