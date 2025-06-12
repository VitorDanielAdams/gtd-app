import React from "react";
import { MessageSquare, Trash2 } from "lucide-react-native";
import { TaskContainer, TaskText, IconButton } from "./TaskItem.styles";
import { TaskItemProps } from "./TaskItem.types";
import { useTheme } from 'styled-components/native';

const TaskItem: React.FC<TaskItemProps> = ({ item, onDelete }) => {
  const theme = useTheme();
  return (
    <TaskContainer>
      <TaskText>{item.text}</TaskText>
      <IconButton onPress={() => onDelete(item.id)}>
        <Trash2 color={theme.colors.error} size={20} />
      </IconButton>
    </TaskContainer>
  );
};

export default TaskItem; 