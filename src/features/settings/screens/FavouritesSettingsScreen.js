/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfo } from "../../restaurants/components/restaurant-info";
import { Spacer } from "../../../main-components/spacer";
import { SafeArea } from "../../../main-components/safe-area";
import { Text } from "../../../main-components/text";
export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const NoFavView = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesSettingsScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  if (!favourites.length) {
    return (
      <NoFavView>
        <Text center>No Favourites Restaurants</Text>
      </NoFavView>
    );
  }
  return (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
