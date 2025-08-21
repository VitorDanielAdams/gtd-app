import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import tasksReducer from './slices/tasksSlice';
import languageReducer from './slices/languageSlice';
import projectsReducer from './slices/projectsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    tasks: tasksReducer,
    projects: projectsReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 