import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/commons/header";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Fragment } from "react";
import Container from "../components/layouts/container";
import { getAllPokemon } from "../shared/services/api";
import { Card } from "react-native-paper";
import { properties, style } from "../shared/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveData } from "../shared/storage";

const Dashboard = ({ navigation: { navigate } }) => {
  const [listPokemon, setListPokemon] = useState([]);
  const fetchPokemon = async () => {
    const res = await getAllPokemon();
    if (res?.status === 200) {
      console.log("berhasil");
      setListPokemon(res?.data?.results);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleClick = async (data) => {
    navigate("detail");
    saveData(data);
  };

  return (
    <Fragment>
      <View>
        <ScrollView>
          <HeaderComponent />
          <Container>
            <Text style={[style?.["sub-title"], properties?.["mb-2"]]}>
              Pokemon List
            </Text>
            <Text style={style?.["text"]}>Find the pokemon you want</Text>
            {listPokemon?.length > 0
              ? listPokemon?.map((data, i) => (
                  <Card
                    onTouchStart={() => handleClick(data)}
                    key={i}
                    style={[style?.card, properties?.["mt-1"]]}
                  >
                    <Text>{data?.name}</Text>
                  </Card>
                ))
              : ""}
          </Container>
        </ScrollView>
      </View>
    </Fragment>
  );
};

export default Dashboard;
