import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotesType, Status } from './types';
import { NoteType } from '../note/types';
import { fetchNotes, addNote, editNote } from './asyncActions';

const initialState: NotesType = {
  notes: [],
  statusFetchNotes: Status.LOADING,
  statusAddNote: Status.LOADING,
  statusEditNote: Status.LOADING,
  statusRemoveNote: Status.LOADING,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.statusFetchNotes = Status.LOADING;
        state.notes = [];
      })
      .addCase(fetchNotes.fulfilled, (state, action: PayloadAction<NoteType[]>) => {
        state.statusFetchNotes = Status.SUCCESS;
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state) => {
        state.statusFetchNotes = Status.ERROR;
        state.notes = [];
      })
      .addCase(addNote.pending, (state) => {
        state.statusAddNote = Status.LOADING;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.statusAddNote = Status.SUCCESS;
      })
      .addCase(addNote.rejected, (state) => {
        state.statusAddNote = Status.ERROR;
      })
      .addCase(editNote.pending, (state) => {
        state.statusEditNote = Status.LOADING;
      })
      .addCase(editNote.fulfilled, (state) => {
        state.statusEditNote = Status.SUCCESS;
      })
      .addCase(editNote.rejected, (state) => {
        state.statusEditNote = Status.ERROR;
      });
  },
});

export default notesSlice.reducer;
