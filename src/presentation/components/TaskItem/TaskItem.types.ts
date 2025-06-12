import { Task } from "@/domain/entities/task";

export interface TaskItemProps {
  item: Task;
  onDelete: (id: string) => void;
} 