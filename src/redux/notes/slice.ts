import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: 'hello',
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
});

export default notesSlice.reducer;
