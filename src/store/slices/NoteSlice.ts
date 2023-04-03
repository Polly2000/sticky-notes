import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../../models/INote";

interface NoteState {
  notes: INote[];
}

const initialState: NoteState = {
  notes: [],
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<INote>) {
      state.notes.push({
        id: action.payload.id,
        note: action.payload.note,
        color: action.payload.color
      })
    },
    editNote(state, action: PayloadAction<INote>) {
      const changingNote = state.notes.find(note => note.id === action.payload.id);
      if (changingNote) {
        changingNote.note = action.payload.note;
      }
    },
    deleteNote(state, action: PayloadAction<number>) {
      state.notes = state.notes.filter(note => note.id !== action.payload)
    }
  }
})

// экспортируем редюсер (его подключаем в стор)
export default noteSlice.reducer;
// экспортируем actions, они создаются автоматически
export const 
{
  addNote,
  editNote,
  deleteNote
} = noteSlice.actions;