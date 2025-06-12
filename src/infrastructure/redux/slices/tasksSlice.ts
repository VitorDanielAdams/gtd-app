import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskRepository } from '@/data/repositories/TaskRepository';
import { AddTaskUseCase } from '@/domain/usecases/task/AddTaskUseCase';
import { Task as DomainTask } from '@/domain/entities/task';

interface TaskState {
  id: string;
  text: string;
  createdAt: Date;
  deletedAt?: Date | null;
}

interface TasksState {
  items: TaskState[];
}

const repo = new TaskRepository();
const usecase = new AddTaskUseCase(repo);

const initialState: TasksState = {
  items: repo.getUndeletedTasks().map((task: DomainTask) => ({
    id: task.id,
    text: task.text,
    createdAt: task.createdAt,
    deletedAt: task.deletedAt,
  })),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ text: string, type?: string }>) => {
      usecase.execute(action.payload.text, action.payload.type);
      state.items = repo.getUndeletedTasks().map((task: DomainTask) => ({
        id: task.id,
        text: task.text,
        createdAt: task.createdAt,
        deletedAt: task.deletedAt,
      }));
    },
    softDeleteTask: (state, action: PayloadAction<string>) => {
      repo.softDeleteTask(action.payload);
      state.items = state.items.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, softDeleteTask } = tasksSlice.actions;
export default tasksSlice.reducer; 