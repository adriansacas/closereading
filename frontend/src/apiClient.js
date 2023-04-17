import axios from 'axios';
import { API_URL, PROVIDER_API_URL } from './config';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const apiClientProvider = axios.create({
    baseURL: PROVIDER_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export {apiClient, apiClientProvider};