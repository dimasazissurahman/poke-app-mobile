import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 2,
    padding: 24,
    backgroundColor: "#372323",
    color: "#EDEDED",
  },
  text: {
    fontSize: 14,
    color: "#EDEDED",
  },
  ["sub-title"]: {
    color: "#EDEDED",
    fontSize: 24,
    fontWeight: "bold",
  },
  ["header-title"]: {
    fontSize: 48,
    color: "#EDEDED",
    fontWeight: "700",
  },
  ["header-container"]: {
    backgroundColor: "#372323",
    flex: 1,
    maxHeight: "15%",
    // alignSelf: "stretch",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: 14,
  },
});


export const styleDetail = StyleSheet.create({
  ["selected-tab"]: {
    borderBottomColor: "#EDEDED",
    borderBottomWidth: 1,
  },
  ["text-tab"]: {
    fontSize:14,
    fontWeight:"bold",
    color:"#EDEDED"
  },
  progressBar: {
    height: 20,
    flexDirection: "row",
    width: '100%',
    backgroundColor: '#43403F',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  }
})

export const properties = StyleSheet.create({
  ["mb-1"]: {
    marginBottom: 10,
  },
  ["mb-2"]: {
    marginBottom: 15,
  },
  ["mb-3"]: {
    marginBottom: 20,
  },
  ["mb-4"]: {
    marginBottom: 25,
  },
  ["mt-1"]: {
    marginTop: 10,
  },
  ["mt-2"]: {
    marginTop: 15,
  },
  ["mt-3"]: {
    marginTop: 20,
  },
  ["mt-4"]: {
    marginTop: 25,
  },
  ["mr-1"]: {
    marginRight: 10,
  },
  ["mr-2"]: {
    marginRight: 15,
  },
  ["mr-3"]: {
    marginRight: 20,
  },
  ["mr-4"]: {
    marginRight: 25,
  },
  ["ml-1"]: {
    marginLeft: 10,
  },
  ["ml-2"]: {
    marginLeft: 15,
  },
  ["ml-3"]: {
    marginLeft: 20,
  },
  ["ml-4"]: {
    marginLeft: 25,
  },
});

