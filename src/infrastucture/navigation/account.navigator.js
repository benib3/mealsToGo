/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/account.screen";
import { RegisterScreen } from "../../features/account/register.screen";
const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={RegisterScreen} />
  </Stack.Navigator>
);
