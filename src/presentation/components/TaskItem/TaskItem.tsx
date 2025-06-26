import React from "react";
import { MessageSquare, Trash2 } from "lucide-react-native";
import { TaskContainer, TaskText, IconButton, TaskInfo, TaskDate } from "./TaskItem.styles";
import { TaskItemProps } from "./TaskItem.types";
import { useTheme } from 'styled-components/native';
import { dateUtils } from '@/shared/utils/dateUtils';

const TaskItem: React.FC<TaskItemProps> = ({ item, onDelete }) => {
  const theme = useTheme();
  
  return (
    <TaskContainer>
      <TaskInfo>
        <TaskText>{item.text}</TaskText>
        <TaskDate>{dateUtils.formatDateTime(item.createdAt)}</TaskDate>
      </TaskInfo>
      <IconButton onPress={() => onDelete(item.id)}>
        <Trash2 color={theme.colors.error} size={20} />
      </IconButton>
    </TaskContainer>
  );
};

export default TaskItem; 