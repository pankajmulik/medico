import { combineReducers } from '@reduxjs/toolkit';

import reducer from './apreduce'

const reducers = combineReducers({
   appointment :reducer
})

export default reducers