import ACTIONS from './actions';
import {appActions} from '@redux/app';

const initConfig = ({
                        i18nTranslations,
                    }) => {
    return async dispatch => {
        try {
            dispatch(ACTIONS.configLoaded({
                i18nTranslations,
            }));
        } catch (error) {
            dispatch(appActions.appError());
        }
    };
}


export default {
    initConfig
};
