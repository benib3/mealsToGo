/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState, useEffect } from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screens";
import { FavouritesSettingsScreen } from "../../features/settings/screens/FavouritesSettingsScreen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        name="Favourites"
        component={FavouritesSettingsScreen}
      />
    </SettingsStack.Navigator>
  );
};
