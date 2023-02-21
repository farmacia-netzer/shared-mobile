import { getParams } from '##shared/helpers/provider/get-params';
import axios from 'axios';

const mapApiGeoCodeJs = "https://maps.googleapis.com"

const getAddress = (params: any) => {
    return axios.get(`${mapApiGeoCodeJs}/maps/api/geocode/json?${getParams(params)}`)
        .catch(error => {
            console.log('🪲 - | -  error', error);
            return Promise.resolve({ error: { message: 'Error' } });
        });
};

export const googleMapsService = {
    getAddress
};
