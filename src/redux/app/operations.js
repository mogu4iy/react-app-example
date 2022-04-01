import ACTIONS from './actions';
import {configRequest} from "@services/api/config"
import {configOperations} from '@redux/config';

const initApp = () => {
    return async dispatch => {
        dispatch(ACTIONS.appLoading());
        try {
            const response = await configRequest()
            await configOperations.initConfig(response)(dispatch)
            dispatch(ACTIONS.appLoaded());
        } catch (error) {
            dispatch(ACTIONS.appError());
        }
    };
}


export default {
    initApp
};
