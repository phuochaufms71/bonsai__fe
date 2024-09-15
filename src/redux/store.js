import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { thunk } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authSlice';
import bonsaiReducer from "./bonsai/bonsaiSlice";
import cartReducer from "./cart/cartSlice";
import addressReducer from "./address/addressSlice";
import messageReducer from "./message/messageSlice";
import paymentReducer from './payment/paymentSlice';
import favouriteBonsaiReducer from './bonsai/favouriteBonsaiSlice';
import commentReducer from './comment/commentSlice';
import orderReducer from './order/orderSlice';
import replyReducer from './reply/replySlice';

const rootReducer = combineReducers({
    auth: authReducer,
    bonsai: bonsaiReducer,
    cart: cartReducer,
    address: addressReducer,
    message: messageReducer,
    payment: paymentReducer,
    favourite: favouriteBonsaiReducer,
    comment: commentReducer,
    order: orderReducer,
    reply: replyReducer,
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