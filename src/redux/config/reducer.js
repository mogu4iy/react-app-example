import {createReducer, combineReducers} from '@reduxjs/toolkit';
import ACTIONS from './actions';

const initialUserState = {
    loaded: false,
    i18nTranslations: {},
};

const config = createReducer(initialUserState, {
    [ACTIONS.configLoaded]: (state, {payload}) => {
        return {
            ...state,
            loaded: true,
            ...payload
        }
    },
    [ACTIONS.configLoading]: (state, {}) => {
        return {
            ...state,
            loaded: false,
        }
    },
});

export default combineReducers({
    config
});
