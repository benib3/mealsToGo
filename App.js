/* eslint-disable react/react-in-jsx-scope */
import * as React from "react";

import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurantScreen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastucture/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </>
  );
}
