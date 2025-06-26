import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import tasksReducer from './slices/tasksSlice';
import languageReducer from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    tasks: tasksReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 