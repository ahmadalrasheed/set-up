import { createSlice } from '@reduxjs/toolkit';
import { requestAsyncThunk, responseAsyncThunk } from '../../templates';

interface tokens {
    data: {
        tokens: {
            access: any;
            refresh: any;
        };
    };
}
interface UsersState {
    entities: tokens | any;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    currentRequestId: number | undefined;
    error: any[] | undefined;
    status?: number;
    tempToken?: any | undefined;
    refreshCounter?: boolean | undefined;
}

const initialState = {
    loading: 'idle',
    entities: undefined,
    currentRequestId: undefined,
    error: undefined,
    status: 0,
    refreshCounter: false,
} as UsersState;
const headers = {     
    headers: {  MemberId: 5843 }
}
export const signIn = () => {
    return requestAsyncThunk({
        storeName: 'auth',
        _url: `api/users`,
        method: 'UPLOAD',
        exact:'/sign-in',
        headers
    });
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAction: () => {
            return initialState;
        },
        setAccessTempToken: (state, { payload: { tempToken } }: any) => {
            state.tempToken = tempToken;
            return state;
        },
        setAccessToken: (state, { payload: { accessToken } }: any) => {
            state.entities.tokens.access = accessToken;
            return state;
        },
    },
    extraReducers: responseAsyncThunk(signIn()),
});



export const refreshToken = () => {
    return requestAsyncThunk({
        storeName: 'refreshToken',
        _url: `/auth/refresh-token`,
        method: 'POST',
    });
};

export const refreshTokenSlice = createSlice({
    name: 'refreshToken',
    initialState,
    reducers: {
        resetAction: () => {
            return initialState;
        },
    },
    extraReducers: responseAsyncThunk(refreshToken()),
});
