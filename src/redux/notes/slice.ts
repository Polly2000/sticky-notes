import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotesType, Status } from './types';
import { NoteType } from '../note/types';
import { fetchNotes, setDraggableNotes, addNote, editNote, removeNote } from './asyncActions';

const initialState: NotesType = {
  notes: [],
  // lastId: 0,
  statusFetchNotes: Status.LOADING,
  statusSetNotes: Status.LOADING,
  statusAddNote: Status.LOADING,
  statusEditNote: Status.LOADING,
  statusRemoveNote: Status.LOADING,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes(state, action) {
      state.notes = action.payload;
    },
  },
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
      .addCase(setDraggableNotes.pending, (state) => {
        state.statusSetNotes = Status.LOADING;
      })
      .addCase(setDraggableNotes.fulfilled, (state, action) => {
        state.statusSetNotes = Status.SUCCESS;
        state.notes = action.payload;
      })
      .addCase(setDraggableNotes.rejected, (state) => {
        state.statusSetNotes = Status.ERROR;
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
      })
      .addCase(removeNote.pending, (state) => {
        state.statusRemoveNote = Status.LOADING;
      })
      .addCase(removeNote.fulfilled, (state) => {
        state.statusRemoveNote = Status.SUCCESS;
      })
      .addCase(removeNote.rejected, (state) => {
        state.statusRemoveNote = Status.ERROR;
      });
  },
});

export const { setNotes } = notesSlice.actions;
export default notesSlice.reducer;
