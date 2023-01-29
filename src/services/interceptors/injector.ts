import { authRequest, errorResponse } from './';
import { clientAction } from '../templates/axios';

export const injector = (store: any) => {
    clientAction.interceptors.request.use(...authRequest(store));
    clientAction.interceptors.response.use(...errorResponse(store));
};
