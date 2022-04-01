import {createAction} from '@reduxjs/toolkit';

const configLoaded = createAction('config/loaded');
const configLoading = createAction('config/loading');

export default {
    configLoaded,
    configLoading
};
