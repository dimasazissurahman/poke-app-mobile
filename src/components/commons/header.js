import React from "react";
import { Image, Text, View } from "react-native";
import { style } from "../../shared/styles";
import logo_poke from "../../../assets/logo_poke.png";
import icon_back from "../../../assets/icon_back.png";

const HeaderComponent = (props) => {
  const { backIsActive, navigation } = props;
  return (
    <View style={style["header-container"]}>
      {backIsActive ? (
        <View onTouchStart={() => navigation?.navigate('dashboard')}>
          <Image
            style={{ width: 25, height: 25, marginRight: 25 }}
            source={icon_back}
          />
        </View>
      ) : (
        ""
      )}
      <Text style={style["header-title"]}>PokeApp</Text>
      <Image
        style={{ width: 50, height: 50, marginLeft: 10 }}
        source={logo_poke}
      />
    </View>
  );
};

export default HeaderComponent;
