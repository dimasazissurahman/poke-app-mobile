import AsyncStorage from "@react-native-async-storage/async-storage";


export const saveData = async (data) => {
  try {
      await AsyncStorage.setItem("P-DATA", JSON.stringify(data));
      console.log("user data berhasil di store");
  } catch (error) {
      console.log("error saveData " + error);
  }
}

export const getData = async () => {
  try {
      const data = await AsyncStorage.getItem("P-DATA");
      let objData = JSON.parse(data);
      console.log("data berhasil di get");
      return objData;
  } catch (error) {
      console.log("data error di get" + error);
  }
}