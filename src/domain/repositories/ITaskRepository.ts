import { Task } from "@/domain/entities/task";
import Realm from 'realm';

export interface ITaskRepository {
  getAllTasks(): Task[];
  addTask(task: Task): void;
  softDeleteTask(id: Realm.BSON.ObjectId): void;
  getUndeletedTasks(): Task[];
} 