import React, { useState } from "react";
import TaskItem from "@/presentation/components/TaskItem/TaskItem";
import { ScreenContainer } from "@/presentation/components/common/ScreenContainer";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/infrastructure/redux/store';
import { addTask, softDeleteTask } from '@/infrastructure/redux/slices/tasksSlice';
import { TaskState } from '@/shared/types/task';
import {
  InputContainer,
  TaskInput,
  TaskList,
} from "./InboxScreen.styles";
import ScreenTitle from "../../components/common/ScreenTitle/ScreenTitle";

const InboxScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.items);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({ text: taskText }));
      setTaskText("");
    }
  };

  const handleDeleteTask = (id: string) => {
    dispatch(softDeleteTask(id));
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
        data={tasks.toReversed()}
        keyExtractor={(item: TaskState) => item.id}
        renderItem={({ item }: { item: TaskState }) => (
          <TaskItem
            item={item}
            onDelete={() => handleDeleteTask(item.id)}
          />
        )}
      />
      
    </ScreenContainer>
  );
};

export default InboxScreen;