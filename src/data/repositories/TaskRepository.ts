import { Task } from '@/infrastructure/datasources/realm/models/Task';
import { realm } from '@/infrastructure/datasources/realm/realmConfig';
import { ITaskRepository } from '@/domain/repositories/ITaskRepository';
import { Task as DomainTask } from '@/domain/entities/task';

export class TaskRepository implements ITaskRepository {
  getAllTasks(): DomainTask[] {
    return realm.objects<Task>('Task').map(task => ({
      id: task.id,
      text: task.text,
      createdAt: task.createdAt,
      deletedAt: task.deletedAt,
    }));
  }

  getUndeletedTasks(): DomainTask[] {
    return realm.objects<Task>('Task').filtered('deletedAt == null').map(task => ({
      id: task.id,
      text: task.text,
      createdAt: task.createdAt,
      deletedAt: task.deletedAt,
    }));
  }

  addTask(task: DomainTask) {
    realm.write(() => {
      realm.create<Task>('Task', {
        id: task.id,
        text: task.text,
        createdAt: task.createdAt,
        deletedAt: task.deletedAt || null,
      });
    });
  }

  softDeleteTask(id: string) {
    const task = realm.objectForPrimaryKey<Task>('Task', id);
    if (task) {
      realm.write(() => {
        task.deletedAt = new Date();
      });
    }
  }
} 