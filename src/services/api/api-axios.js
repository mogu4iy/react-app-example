import axios from 'axios';
import apiConfig from '@config/api';

export default axios.create({
    baseURL: apiConfig.BASE_URL,
    validateStatus: function (status) {
        return status;
    },
});
