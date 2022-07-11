/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastucture/theme";
import { SafeArea } from "./src/main-components/safe-area";
import { Navigation } from "./src/infrastucture/navigation/app.navigator";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

const firebaseConfig = {
  apiKey: "AIzaSyD-vu5NP-bFvhdVf9AEP2_4aoOTXJI75QY",
  authDomain: "mealstogo-1ed9e.firebaseapp.com",
  projectId: "mealstogo-1ed9e",
  storageBucket: "mealstogo-1ed9e.appspot.com",
  messagingSenderId: "598932158470",
  appId: "1:598932158470:web:f3f7ecd761189f85d4eb87",
};

initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "beni@mail.com", "test123")
        .then((user) => {
          setIsAuthenticated(true);
          console.log("User logged in.");
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  if (!isAuthenticated) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}
