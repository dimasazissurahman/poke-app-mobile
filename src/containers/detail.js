import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../components/commons/header";
import { TabBar } from "../components/commons/tab-bar";
import Container from "../components/layouts/container";
import { capitalizeFirstLetter } from "../shared/function/string.function";
import { TodoContext } from "../shared/provider/provider";
import { getData } from "../shared/storage";
import { properties, style } from "../shared/styles";

const DetailContainer = ({ navigation }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const [url, setUrl] = useState("");
  const [data, setData] = useState();
  const [name, setName] = useState("");

  const getDataPokemon = async () => {
    const res = await getData();
    setUrl(res?.url);
    setName(res?.name);
  };

  useEffect(() => {
    getDataPokemon();
  }, []);

  const fetchPokemonById = async () => {
    const res = await axios.get(url);
    setData(res.data);
  };

  useEffect(() => {
    if (url) {
      fetchPokemonById();
    }
  }, [url]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <HeaderComponent backIsActive={true} navigation={navigation} />
        <Container>
          <Text style={[style?.["sub-title"], properties?.["mb-2"]]}>
            {name ? capitalizeFirstLetter(name) : ""}
          </Text>
          <TabBar data={data} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailContainer;
