import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { NoteType, IRemoveNote } from '../note/types';
import { NotesType } from './types';
import { backUrl } from '../store';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  try {
    const { data } = await axios.get(`${backUrl}/notes`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const setDraggableNotes = createAsyncThunk('notes/setNotes', async (params: any) => {
  try {
    const { notes } = params;
    const response = await axios.post(`${backUrl}/notes`, {
      notes: notes,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addNote = createAsyncThunk('notes/addNote', async (params: NoteType) => {
  try {
    const { note, color, order } = params;
    const response = await axios.post(`${backUrl}/notes`, {
      note: note,
      color: color,
      order: order,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const editNote = createAsyncThunk('notes/editNote', async (params: NoteType) => {
  try {
    const { id, note, color, order } = params;
    const response = await axios.put(`${backUrl}/notes/${id}`, {
      id: id,
      note: note,
      color: color,
      order: order,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const removeNote = createAsyncThunk('notes/removeNote', async (params: IRemoveNote) => {
  try {
    const { id } = params;
    const response = await axios.delete(`${backUrl}/notes/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
