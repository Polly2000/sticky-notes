import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { NoteType } from '../note/types';
import { backUrl } from '../store';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  try {
    const { data } = await axios.get(`${backUrl}/notes`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addNote = createAsyncThunk('notes/addNote', async (params: NoteType) => {
  try {
    const { note, color } = params;
    const response = await axios.post(`${backUrl}/notes`, {
      note: note,
      color: color,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const editNote = createAsyncThunk('notes/editNote', async (params: NoteType) => {
  try {
    const { id, note, color } = params;
    const response = await axios.put(`${backUrl}/notes/${id}`, {
      id: id,
      note: note,
      color: color,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
