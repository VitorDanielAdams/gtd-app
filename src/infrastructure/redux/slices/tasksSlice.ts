import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskRepository } from '@/data/repositories/TaskRepository';
import { AddTaskUseCase } from '@/domain/usecases/task/AddTaskUseCase';
import { Task as DomainTask } from '@/domain/entities/Task';
import { TaskState } from '@/shared/types/task';
import Realm from 'realm';

interface TasksState {
  items: TaskState[];
}

const repo = new TaskRepository();
const usecase = new AddTaskUseCase(repo);

const initialState: TasksState = {
  items: repo.getUndeletedTasks().map((task: DomainTask) => ({
    id: task.id.toHexString(),
    text: task.text,
    createdAt: task.createdAt.toISOString(),
    deletedAt: task.deletedAt?.toISOString() || null,
  })),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ text: string, type?: string }>) => {
      usecase.execute(action.payload.text, action.payload.type);
      state.items = repo.getUndeletedTasks().map((task: DomainTask) => ({
        id: task.id.toHexString(),
        text: task.text,
        createdAt: task.createdAt.toISOString(),
        deletedAt: task.deletedAt?.toISOString() || null,
      }));
    },
    softDeleteTask: (state, action: PayloadAction<string>) => {
      const objectId = new Realm.BSON.ObjectId(action.payload);
      repo.softDeleteTask(objectId);
      state.items = state.items.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, softDeleteTask } = tasksSlice.actions;
export default tasksSlice.reducer; 