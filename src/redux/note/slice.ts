import { createSlice } from '@reduxjs/toolkit';
import { NoteType } from './types';

const initialState: NoteType = {
  id: 0,
  note: '',
  color: '#fff',
  order: 0,
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {},
});

export default noteSlice.reducer;
