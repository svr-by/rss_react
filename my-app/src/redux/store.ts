import { configureStore } from '@reduxjs/toolkit';
import form from 'redux/slices/formSlice';
import dictionary from 'redux/slices/dictionarySlice';

export const store = configureStore({
  reducer: { form, dictionary },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
