import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { INote } from "../../models/INote";
import { AppDispatch } from "../store";

interface NoteState {
  notes: INote[];
  isLoading: boolean;
  error: string;
}

const initialState: NoteState = {
  notes: [],
  isLoading: false,
  error: '',
}

export const fetchNotes = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(noteSlice.actions.notesFetching());
    const response = await axios.get<INote[]>('http://localhost:3001/notes');
    dispatch(noteSlice.actions.notesFetchingSuccess(response.data));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(noteSlice.actions.notesFetchingError(e.message));
    } 
  }
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    notesFetching(state) {
      state.isLoading = true;
    },
    notesFetchingSuccess(state, action: PayloadAction<INote[]>) {
      state.isLoading = false;
      state.error = '';
      state.notes = action.payload;
    },
    notesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
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