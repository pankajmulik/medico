import { combineReducers } from '@reduxjs/toolkit';

import reducer from './apreduce'

const reducers = combineReducers({
    appointmnet :reducer
})

export default reducers