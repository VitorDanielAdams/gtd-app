import { Task } from '@/infrastructure/datasources/realm/models/Task';
import { realm } from '@/infrastructure/datasources/realm/realmConfig';
import { ITaskRepository } from '@/domain/repositories/ITaskRepository';
import { Task as DomainTask } from '@/domain/entities/task';
import Realm from 'realm';

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
        id: new Realm.BSON.ObjectId(),
        text: task.text,
        createdAt: task.createdAt,
        deletedAt: task.deletedAt || null,
      });
    });
  }

  softDeleteTask(id: Realm.BSON.ObjectId) {
    const task = realm.objectForPrimaryKey<Task>('Task', id);
    if (task) {
      realm.write(() => {
        task.deletedAt = new Date();
      });
    }
  }
} 