export interface Task {
  id: string;
  text: string;
  createdAt: Date;
  deletedAt?: Date | null;
} 