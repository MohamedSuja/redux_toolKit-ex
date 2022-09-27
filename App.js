import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import AppStack from "./navigation/AppStack";
import { store } from "./redux/store";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

export default function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}
