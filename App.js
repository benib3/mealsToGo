/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastucture/theme";

import { Navigation } from "./src/infrastucture/navigation/index.navigator";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import * as firebase from "firebase/app";
import { startFirebase } from "./src/services/firebase";

startFirebase();

export default function App() {
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
        {/* Firebase data */}
        <AuthenticationContextProvider>
          {/* Favourites local data of restaurants*/}
          <FavouritesContextProvider>
            {/* Location local mock data of restaurants*/}
            <LocationContextProvider>
              {/* Restaurants local mock data */}
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
