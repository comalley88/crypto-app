// to configure the store 
import { configureStore } from "@reduxjs/toolkit";

//connect api in services to the store 
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore(
    {
        reducer:{
            [cryptoApi.reducerPath]: cryptoApi.reducer,
            [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        }
    }
)