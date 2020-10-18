import * as types from './ActionTypes';

export const loginUser = (data) => {
    const { username, password } = data;
    return (dispatch, getState) => {
        const { login } = getState().login;
        for (let i = 0; i < login.length; i++) {
            if (login[i].username === username && login[i].password === password) {
                let user = {
                    username: login[i].username, password: login[i].password, isSignIn: true
                }
                localStorage.setItem('user', JSON.stringify(user));
            }
        }
        return dispatch({ type: types.LOGIN, payload: login });
    }
}

export const createUser = (data) => {
    const { username, password, email } = data;
    return (dispatch, getState) => {
        const { login } = getState().login;
        const newData = [
            ...login,
            {
                'username': username,
                'password': password,
                'email': email,
            }
        ]
        return dispatch({ type: types.CREATE, payload: newData });
    }
}

export const logoutUser = (data) => {
    return (dispatch, getState) => {
        const { login } = getState().login;
        localStorage.removeItem('user');
        return dispatch({ type: types.LOGIN, payload: login });
    }
}