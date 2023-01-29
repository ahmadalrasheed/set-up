import get from 'lodash/get';
import { SUCCESS_STATUS } from '../../constants/auth';
import { refreshTokenSelector } from './selectors';
import { authAPI } from '../apis';

const errorResponse = (store: any) => {
    return [
        (response: any) => {
            return response;
        },
        async (error: any) => {
            const responseStatus = get(error, 'response.status');
            console.log("error config" , error.config,);
            
            if ( error.response) {
                
                const refreshToken = refreshTokenSelector(store?.getState?.());
                if (responseStatus === 401) {
                    try {
                        store
                            .dispatch(authAPI.refreshToken()({ refreshToken }))
                            .then(({ payload }: any) => {
                                if (SUCCESS_STATUS.includes(payload?.status)) {
                                    store.dispatch(
                                        authAPI.authSlice.actions.setAccessToken({
                                            accessToken: payload?.data?.tokens?.access,
                                        } as any ),
                                    );
                                } else {
                                    store.dispatch(authAPI.authSlice.actions.resetAction());
                                }
                            });
                    } catch (_error) {
                        return Promise.reject(_error);
                    }
                }
            }

            return Promise.reject(error);
        },
    ];
};

export default errorResponse;
