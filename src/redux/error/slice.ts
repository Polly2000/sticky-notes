import { createSlice } from '@reduxjs/toolkit';
import { ErrorType } from './types';

const initialState: ErrorType = {
  isError: false,
  errorText: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setIsError(state, action) {
      state.isError = action.payload;
    },
    setErrorText(state, action) {
      state.errorText = action.payload;
    },
  },
});

export const { setIsError, setErrorText } = errorSlice.actions;
export default errorSlice.reducer;
