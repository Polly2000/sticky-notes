import { createSlice } from '@reduxjs/toolkit';
import { NoteType } from './types';

const initialState: NoteType = {
  id: 0,
  note: '',
  color: '#fff',
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {},
});

export default noteSlice.reducer;
