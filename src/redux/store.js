/* eslint-disable no-undef */
import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {appReducer} from './app';
import {configReducer} from './config';

const store = configureStore({
    middleware:
        (getDefaultMiddleware => getDefaultMiddleware().concat(logger)),
    reducer: {
        app: appReducer,
        config: configReducer,
    },

    devTools: process.env.NODE_ENV === 'development',
});

export default {store};
