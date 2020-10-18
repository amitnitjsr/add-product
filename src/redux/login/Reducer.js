
import * as types from './ActionTypes';

const initialState = {
    login: [{ username: 'demo_app', password: '12345', email: 'abc@gmail.com' }],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
        case types.LOGOUT:
        case types.CREATE:
            return {
                ...state,
                login: action.payload,
            }
        default:
            return state
    }
}