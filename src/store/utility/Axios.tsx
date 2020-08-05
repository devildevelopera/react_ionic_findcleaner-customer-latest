/* eslint-disable no-useless-catch */
import axios from 'axios';
import { Plugins } from '@capacitor/core';
import { environment } from './enviroment';

const { Storage } = Plugins;

const AxiosCall = async (callData: any, authType = 'Bearer') => {
 
    const token = await Storage.get({ key: 'token'});

    const { path, method, data, contentType } = callData

    const headers = {
        Authorization: `${authType} ${token.value?.toString()}`,
        'Content-Type': contentType || 'application/json'
    };
    const baseUrl = environment.finAPI
    const url = `${baseUrl}${path}`

    try {

        const response = await axios({
            url,
            method,
            data,
            headers,
            responseType: 'json'
        });

        const result = response && response.data

        return result

    } catch(err) {
        throw err
    }
}

export default AxiosCall;
