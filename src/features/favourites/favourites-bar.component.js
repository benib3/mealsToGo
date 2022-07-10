/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import { Spacer } from "../../main-components/spacer";
import { CompactRestaurantInfo } from "../map/components/compact-restaurant-info";
const FavWrapper = styled.View`
  padding: 10px;
  margin-left: 5px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return (
      <FavWrapper>
        <Spacer variant="left.medium">
          <Text variant="caption">No Favourites Restaurants</Text>
        </Spacer>
      </FavWrapper>
    );
  }
  return (
    <FavWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavWrapper>
  );
};
