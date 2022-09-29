import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "../../shared/styles";

const Container = (props) => {
  return <SafeAreaView style={style?.container}>{props.children}</SafeAreaView>;
};

export default Container;
