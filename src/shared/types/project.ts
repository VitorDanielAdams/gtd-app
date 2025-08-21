import { ProjectStatus } from "@/domain/enums/ProjectsEnums";

export interface ProjectState {
  id: string;
  title: string;
  scheduledAt: string;
  status: ProjectStatus;
  createdAt: string;
  deletedAt?: string | null;
} 

