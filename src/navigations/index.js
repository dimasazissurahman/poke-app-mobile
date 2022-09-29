import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../containers/dashboard";
import DetailContainer from "../containers/detail";
import Container from "../components/layouts/container";
import HeaderComponent from "../components/commons/header";

// const route = createStackNavigator({
//   Dashboard: { screen: Dashboard, navigationOptions: { headerShown: false } },
//   Detail: {
//     screen: DetailContainer,
//     navigationOptions: { headerShown: false },
//   },
// });

const Stack = createNativeStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="detail" component={DetailContainer} />
    </Stack.Navigator>
  );
}

export default MainRoute;
