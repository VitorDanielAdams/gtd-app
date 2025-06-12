import { Task } from "@/domain/entities/task";

export interface ITaskRepository {
  getAllTasks(): Task[];
  addTask(task: Task): void;
  softDeleteTask(id: string): void;
  getUndeletedTasks(): Task[];
} 