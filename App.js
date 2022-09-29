import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./src/navigations";
import { TodoProvider } from "./src/shared/provider/provider";

export default function App() {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </TodoProvider>
  );
}
