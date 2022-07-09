/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info";
import { Search } from "../components/search.component";
import styled from "styled-components";
import { Spacer } from "../../../main-components/spacer";
import { SafeArea } from "../../../main-components/safe-area";

import { RestaurantsContext } from "../../../services/restaurants.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  marginleft: -25;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={"gray"} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
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
