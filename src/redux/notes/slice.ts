import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotesType, Status } from './types';
import { NoteType } from '../note/types';
import { fetchNotes } from './asyncActions';

const initialState: NotesType = {
  notes: [],
  status: Status.LOADING,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.status = Status.LOADING;
        state.notes = [];
      })
      .addCase(fetchNotes.fulfilled, (state, action: PayloadAction<NoteType[]>) => {
        state.status = Status.SUCCESS;
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state) => {
        state.status = Status.ERROR;
        state.notes = [];
      });
  },
});

export default notesSlice.reducer;
