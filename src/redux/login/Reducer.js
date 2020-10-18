
import * as types from './ActionTypes';

const initialState = {
    login: [{ username: 'demo_app', password: '12345', email: 'abc@gmail.com' }],
    isAuthenticate: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
        case types.LOGOUT:
        case types.CREATE:
            return {
                ...state,
                login: action.payload,
                isAuthenticate: action.payload.isAuthenticate
            }
        default:
            return state
    }
}