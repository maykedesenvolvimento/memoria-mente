import { createDriver } from '@redux-requests/axios';
import { handleRequests } from '@redux-requests/core';
import axios from 'axios';

const baseURL='https://us-central1-mentejogos.cloudfunctions.net/api/';
//const baseURL='http://localhost:5000/mentejogos/us-central1/api/';

const {requestsMiddleware, requestsReducer} = handleRequests({
    driver: createDriver(axios.create({baseURL}))
});

export {requestsMiddleware, requestsReducer};