import { createSlice } from '@reduxjs/toolkit';
import { ProjectState } from '@/shared/types/project';

interface ProjectsState {
  items: ProjectState[];
}

const initialState: ProjectsState = {
  items: [],
};

const projectsSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
  },
});

export default projectsSlice.reducer; 