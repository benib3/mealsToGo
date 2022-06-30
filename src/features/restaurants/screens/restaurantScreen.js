/* eslint-disable prettier/prettier */
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info";
export const RestaurantScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    backgroundColor: "#FFF",
    padding: 10,
    textAlign: "flex-start",
    justifyContent: "flex-start",
    borderBottomColor: "black",
  },
  list: {
    backgroundColor: "purple",
    flex: 1,
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    textAlign: "flex-start",
  },
});
