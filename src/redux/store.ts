import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import notesSlice from './notes/slice';
import noteSlice from './note/slice';
import errorSlice from './error/slice';

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    note: noteSlice,
    error: errorSlice,
  },
  // фиксит в консоли
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: false
  // })
});

export const backUrl = 'http://localhost:3001';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
