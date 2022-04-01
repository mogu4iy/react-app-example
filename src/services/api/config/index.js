import {axiosRequest} from '@utils/axios';
import axiosInstance from '../api-axios';
import {errorHandler} from '../errors';

const configPromise = async () => {
    return await axiosRequest({
        method: 'GET',
        url: `/api/config`,
    }).then(async request => {
        return await axiosInstance.request(request);
    });
};

export const configRequest = (data) => {
    return errorHandler({request: configPromise, data})
        .then(({landingConfig, translations, paymentDetails, fundraising, partner}) => {
            return {
                i18nTranslations: Object.keys(translations).reduce((prev, lang) => {
                    return {
                        ...prev,
                        [lang]: {
                            translation: {
                                ...translations[lang]
                            }
                        }
                    }
                }, {}),
                landingConfig,
                paymentDetails,
                fundraising,
                partner,
            };
        });
}
