import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

  import storage from 'redux-persist/lib/storage'
  import stripe from 'stripe';


const stripeInstance = stripe('sk_test_51OMO4sHPxmbA5WMdHsMA6RVVrDAgyu5ZPhrHbLDpaFw93NBO1cPb3lxU2JxnZdTooyK8B2V8EOaLYJ9yxoGGZru900k3ZcMABx');

//const stripe = require('stripe')('sk_test_51OMO4sHPxmbA5WMdHsMA6RVVrDAgyu5ZPhrHbLDpaFw93NBO1cPb3lxU2JxnZdTooyK8B2V8EOaLYJ9yxoGGZru900k3ZcMABx');
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  

const persistedReducer = persistReducer(persistConfig, cartReducer)
export const store =  configureStore({
    reducer:{
        cart:persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)