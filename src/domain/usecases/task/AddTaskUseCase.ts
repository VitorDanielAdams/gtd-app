import { ITaskRepository } from '@/domain/repositories/ITaskRepository';
import { v4 as uuid } from 'uuid';

export class AddTaskUseCase {
  constructor(private repo: ITaskRepository) {}

  execute(text: string, type: string = 'message') {
    if (!text.trim()) {
      throw new Error('Texto da tarefa é obrigatório');
    }
    this.repo.addTask({
      id: uuid(),
      text,
      createdAt: new Date(),
      deletedAt: null,
    });
  }
} 