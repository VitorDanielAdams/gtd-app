import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Check,
  FolderKanban,
  Inbox,
  Lightbulb,
  MoreHorizontal,
} from "lucide-react-native";
import InboxScreen from "@/presentation/screens/Inbox/InboxScreen";
import ProjectsScreen from "@/presentation/screens/Projects/ProjectsScreen";
import ContextsScreen from "@/presentation/screens/Contexts/ContextsScreen";
import ReviewScreen from "@/presentation/screens/Review/ReviewScreen";
import MoreScreen from "@/presentation/screens/More/MoreScreen";
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '@/infrastructure/redux/hooks';
import { toggleTheme } from '@/infrastructure/redux/slices/themeSlice';
import { darkTheme } from '@/shared/styles/theme/dark';
import { lightTheme } from '@/shared/styles/theme/light';

const Tab = createBottomTabNavigator();

const MenuBottomTabs = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const currentThemeName = useAppSelector((state) => state.theme.currentTheme);
  const theme = currentThemeName === 'dark' ? darkTheme : lightTheme;

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Tab.Navigator
      initialRouteName={t('menu.inbox')}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.colors.surface },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
      }}
    >
      <Tab.Screen
        name={t('menu.projects')}
        component={ProjectsScreen}
        options={{ tabBarIcon: ({ color }) => <FolderKanban color={color} size={20} /> }}
      />
      <Tab.Screen
        name={t('menu.contexts')}
        component={ContextsScreen}
        options={{ tabBarIcon: ({ color }) => <Lightbulb color={color} size={20} /> }}
      />
      <Tab.Screen
        name={t('menu.inbox')}
        component={InboxScreen}
        options={{
          tabBarIcon: ({ color }) => <Inbox color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name={t('menu.review')}
        component={ReviewScreen}
        options={{ tabBarIcon: ({ color }) => <Check color={color} size={20} /> }}
      />
      <Tab.Screen
        name={t('menu.more')}
        component={MoreScreen}
        options={{ tabBarIcon: ({ color }) => <MoreHorizontal color={color} size={20} /> }}
      />
    </Tab.Navigator>
  );
};

export default MenuBottomTabs;