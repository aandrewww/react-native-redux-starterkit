import {AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL, AUTH_LOGOUT} from '../constants/auth';

export default function auth(state = {token: null, errorStatus: ''}, action) {
    switch (action.type) {
        case AUTH_LOGIN_START:
            return {
                ...state,
                loading: true,
                errorStatus: ''
            };
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token
            };
        case AUTH_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                token: null,
                errorStatus: action.payload.message
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null
            };
        default:
            return state;
    }
}