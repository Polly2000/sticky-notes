import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { backUrl } from '../store';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  try {
    const { data } = await axios.get(`${backUrl}/notes`);
    return data;
  } catch (error) {
    console.log(error);
  }
});
