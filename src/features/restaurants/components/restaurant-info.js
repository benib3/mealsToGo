/* eslint-disable prettier/prettier */
import React from "react";
import { Text } from "react-native";
import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Some street",
    isOpenNow = true,
    rating = 4,
    isClosedTemp,
  } = restaurant;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "blue",
  },
});
