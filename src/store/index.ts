import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './modules/rootReducer';
import storage from 'redux-persist/lib/storage';
import { requestsMiddleware } from './modules/rootInterceptor';

const persistorReducer= persistReducer({
    key: 'memoria-mente',
    storage,
    whitelist: ['player']
}, rootReducer);

const store = createStore(persistorReducer, applyMiddleware(...requestsMiddleware));
const persistor = persistStore(store);

export {store, persistor};