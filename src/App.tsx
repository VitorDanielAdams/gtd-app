import React from "react";
import { Provider } from "react-redux";
// import { store } from "@/presentation/redux/store";
import MenuBottomTabs from "@/presentation/navigation/MenuBottomTabs/MenuBottomTabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    // <Provider store={store}>
    <SafeAreaProvider>
      <MenuBottomTabs />
    </SafeAreaProvider>
    // </Provider>
  );
}
