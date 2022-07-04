/* eslint-disable prettier/prettier */
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info";
import styled from "styled-components";
import { Spacer } from "../../../main-components/spacer";
import spacing, { space } from "../../../infrastucture/theme/spacing";
import { SafeArea } from "../../../main-components/safe-area";
import { Ionicons } from "@expo/vector-icons";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfo />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
