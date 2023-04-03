import { configureStore, combineReducers } from "@reduxjs/toolkit";
import noteReducer from './slices/NoteSlice';

const rootReducer = combineReducers({
  noteReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
