import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import ACTIONS from './actions';

const initialUserState = {
    loaded: false,
    error: false,
};

const app = createReducer(initialUserState, {
    [ACTIONS.appLoading]: (state, {}) => {
        return initialUserState
    },
    [ACTIONS.appLoaded]: (state, {}) => {
        return {
            ...state,
            loaded: true,
            error: false,
        }
    },
    [ACTIONS.appError]: (state, {}) => {
        return {
            ...state,
            loaded: true,
            error: true,
        }
    },
});

export default combineReducers({
    app
});
