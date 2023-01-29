import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducers from './reducers';
import { injector } from '../services/interceptors';

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(logger),
});

const persistor = persistStore(store);
injector(store);

export { store, persistor };
