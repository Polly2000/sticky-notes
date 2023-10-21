import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import notesSlice from './notes/slice';
import noteSlice from './note/slice';

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    note: noteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
