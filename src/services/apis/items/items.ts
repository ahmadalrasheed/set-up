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

export const getItemsList = () => {
    return requestAsyncThunk({
        storeName: 'items',
        _url: `api/users`,
        method: 'GET',
        exact : '/list-of-items'
    });
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        resetAction: () => {
            return initialState;
        },
    },
    extraReducers: responseAsyncThunk(getItemsList()),
});


