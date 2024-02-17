import { applyMiddleware, configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers/apreduce";
import {thunk} from 'redux-thunk'



export const store = configureStore({
    reducer: reducer,
    thunk: thunk,
   
})

