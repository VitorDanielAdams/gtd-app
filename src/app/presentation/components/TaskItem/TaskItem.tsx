import React from "react";
import { useTranslation } from 'react-i18next';
import { MessageSquare } from "lucide-react-native";
import { TaskContainer, TaskText, IconButton } from "./TaskItem.styles";
import { TaskItemProps } from "./TaskItem.types";

const TaskItem: React.FC<TaskItemProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <TaskContainer>
      <TaskText>{item.text}</TaskText>
      <IconButton>
        <MessageSquare color="white" size={20} />
      </IconButton>
    </TaskContainer>
  );
};

export default TaskItem; 