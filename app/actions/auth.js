import {Actions as routes} from 'react-native-router-flux';

import {AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL, AUTH_LOGOUT} from '../constants/auth';

export const login = username => {
    return dispatch => {
        dispatch(loginStart());

        setTimeout(() => {
            if (username.length) {
                routes.homePage();
                return dispatch(loginSuccess(username));
            }
            return dispatch(loginFail(new Error('username field is required')));
        }, Math.random() * 1000 + 500)
    };
};

const loginStart = () => {
    return {
        type: AUTH_LOGIN_START
    }
};

const loginSuccess = username => {
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: {
            token: Math.random().toString(),
            username: username
        }
    }
};

const loginFail = error => {
    return {
        type: AUTH_LOGIN_FAIL,
        payload: error,
        error: true
    }
};

export const logout = () => {
    return dispatch => {
        routes.loginPage();
        dispatch({
            type: AUTH_LOGOUT
        });
    };
};