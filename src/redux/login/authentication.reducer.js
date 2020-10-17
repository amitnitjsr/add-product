
import * as type from './ActionTypes';

const initialState = {
    login: { username: 'abc@gmail.com', password: '12345' }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            return {
                ...state,
                login: action.payload,
            }
        default:
            return state
    }
}