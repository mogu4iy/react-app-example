import {createAction} from '@reduxjs/toolkit';

const appLoaded = createAction('app/loaded');
const appLoading = createAction('app/loading');
const appError = createAction('app/error');

export default {
    appLoaded,
    appLoading,
    appError,
};
