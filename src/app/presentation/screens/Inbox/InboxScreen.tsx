import React, { useState } from "react";
import TaskItem from "@/app/presentation/components/TaskItem/TaskItem";
import { ScreenContainer } from "@/app/presentation/components/common/ScreenContainer";
import { useTranslation } from 'react-i18next';
import {
  Header,
  HeaderTitle,
  InputContainer,
  TaskInput,
  TaskList,
} from "./InboxScreen.styles";
import { Task } from "@/domain/entities/task";
import ScreenTitle from "../../components/common/ScreenTitle/ScreenTitle";

const InboxScreen = () => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim()) {
      setTasks([
        ...tasks,
        { id: String(tasks.length + 1), text: taskText, type: 'message' },
      ]);
      setTaskText("");
    }
  };

  return (
    <ScreenContainer>
      <ScreenTitle title={t('menu.inbox')} />
      <InputContainer>
        <TaskInput
          placeholder={t('title.whats_on_your_mind')}
          placeholderTextColor="#888"
          value={taskText}
          onChangeText={setTaskText}
          onSubmitEditing={handleAddTask}
        />
      </InputContainer>

      <TaskList
        data={tasks}
        keyExtractor={(item: Task) => item.id}
        renderItem={({ item }: { item: Task }) => <TaskItem item={item} />}
      />
    </ScreenContainer>
  );
};

export default InboxScreen;