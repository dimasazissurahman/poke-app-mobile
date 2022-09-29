import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { capitalizeFirstLetter } from "../../shared/function/string.function";
import { properties, styleDetail } from "../../shared/styles";

export const TabBar = (props) => {
  const { data } = props;
  const image = data?.sprites?.front_default || "";
  const [species, setSpecies] = useState();
  const [evolution, setEvolution] = useState();

  const fetchColorPokemon = async () => {
    try {
      const res = await axios.get(data?.species?.url);
      setSpecies(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEvolution = async () => {
    try {
      const resEvolve = await axios.get(
        `https://pokeapi.co/api/v2/evolution-chain/${data?.id}/`
      );
      const urlEvolveDetail = await resEvolve?.data?.chain?.evolves_to[0]
        .species?.url;
      const res = await axios.get(urlEvolveDetail);
      console.log("Evolve get berhasil", res.data);
      setEvolution(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchColorPokemon();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          { display: "flex", flexDirection: "row" },
          properties?.["mb-3"],
        ]}
      >
        <Text
          style={[styleDetail?.["selected-tab"], styleDetail?.["text-tab"]]}
        >
          Stats
        </Text>
        <View onTouchStart={() => fetchEvolution()}>
          <Text style={[styleDetail?.["text-tab"], properties?.["ml-3"]]}>
            Evolution
          </Text>
        </View>
      </View>

      <View>
        <View
          style={[
            { display: "flex", flexDirection: "row" },
            properties?.["mb-4"],
          ]}
        >
          <View>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: image }}
            />
            <Text>
              <View style={{ backgroundColor: "#43403F" }}>
                <Text style={{ color: "#EDEDED" }}>Water</Text>
              </View>
            </Text>
          </View>
          <View>
            <Text style={{ color: "#EDEDED" }}>Name: {data?.name || ""}</Text>
            <Text style={{ color: "#EDEDED" }}>
              Height: {data?.height || ""}
            </Text>
            <Text style={{ color: "#EDEDED" }}>
              Weight: {data?.weight || ""}
            </Text>
            <Text style={{ color: "#EDEDED" }}>
              Color: {species?.color?.name || ""}
            </Text>
            <Text style={{ color: "#EDEDED" }}>
              Habitats: {species?.habitat?.name || ""}
            </Text>
          </View>
        </View>
        <View>
          {data?.stats?.length > 0 &&
            data?.stats?.map((data, i) => (
              <View key={i} style={properties?.["mb-2"]}>
                <Text style={[{ color: "#EDEDED" }, properties?.["mb-1"]]}>
                  {data?.stat?.name
                    ? capitalizeFirstLetter(data?.stat?.name)
                    : ""}
                </Text>
                <View
                  style={{
                    backgroundColor: "#43403F",
                    alignSelf: "stretch",
                    textAlign: "center",
                    borderRadius: 15,
                    width: `100%`,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "red",
                      alignSelf: "stretch",
                      textAlign: "center",
                      borderRadius: 15,
                      padding: 7,
                      paddingLeft: 15,
                      width: `${data?.base_stat}%`,
                    }}
                  >
                    <Text style={{ color: "#EDEDED" }}>{data?.base_stat}</Text>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};
