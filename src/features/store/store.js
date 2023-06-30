import { configureStore } from '@reduxjs/toolkit';
import sweetReducer from '../sweet/sweetSlice';

export default configureStore({
  reducer: {
    sweet: sweetReducer,
  },
})