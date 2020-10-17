import * as types from './ActionTypes';

export const loginUser = (data) => {
    debugger
    const { username, password } = data;
    return (dispatch, getState) => {
        const { login } = getState().login;
        // loggingIn: true,
        //         user: action.user
        let user = {
            loggingIn: true,
            user: action.user
        }
        return dispatch({ type: types.LOGIN, payload: user });
    }
}