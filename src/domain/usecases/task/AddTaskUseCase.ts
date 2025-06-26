import { ITaskRepository } from '@/domain/repositories/ITaskRepository';
import { BSON } from 'realm';

export class AddTaskUseCase {
  constructor(private repo: ITaskRepository) {}

  execute(text: string, type: string = 'message') {
    if (!text.trim()) {
      throw new Error('Texto da tarefa é obrigatório');
    }
    this.repo.addTask({
      text,
      createdAt: new Date(),
      deletedAt: null,
    });
  }
} 