import { TaskState } from '@/shared/types/task';

export interface TaskItemProps {
  item: TaskState;
  onDelete: (id: string) => void;
} 