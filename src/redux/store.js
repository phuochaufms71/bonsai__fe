import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { thunk } from 'redux-thunk';

import authReducer from './auth/authSlice';
import bonsaiReducer from "./bonsai/bonsaiSlice";
import blogReducer from './blog/blogSlice';
import cartReducer from "./cart/cartSlice"
import addressReducer from "./address/addressSlice";
import messageReducer from "./message/messageSlice";
import storage from 'redux-persist/lib/storage';
import paymentReducer from './payment/paymentSlice';
import favouriteBonsaiReducer from './bonsai/favouriteBonsaiSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    bonsai: bonsaiReducer,
    blog: blogReducer,
    cart: cartReducer,
    address: addressReducer,
    message: messageReducer,
    payment: paymentReducer,
    favourite: favouriteBonsaiReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        }).concat(thunk)
    }
})

export const persistor = persistStore(store);