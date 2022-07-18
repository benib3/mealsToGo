/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { List, Divider } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../main-components/safe-area";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const breakfastPress = () => setBreakfastExpanded(!breakfastExpanded);
  const lunchPress = () => setLunchExpanded(!lunchExpanded);
  const dinnerPress = () => setDinnerExpanded(!dinnerExpanded);
  const drinksPress = () => setDrinksExpanded(!drinksExpanded);

  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={breakfastPress}
          >
            <List.Item title="Eggs" />
            <Divider />
            <List.Item title="Protein breakfast" />
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={lunchPress}
          >
            <List.Item title="Burger w/ Fries" />
            <Divider />
            <List.Item title="Steak Sandwich" />
            <Divider />
            <List.Item title="Mushroom Soup" />
            <Divider />
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-turkey" />}
            expanded={dinnerExpanded}
            onPress={dinnerPress}
          >
            <List.Item title="Spaghetti Bolognese" />
            <Divider />
            <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
            <Divider />
            <List.Item title="Steak Frites" />
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
            expanded={drinksExpanded}
            onPress={drinksPress}
          >
            <List.Item title="Coffee" />
            <Divider />
            <List.Item title="Tea" />
            <Divider />
            <List.Item title="Modelo" />
            <Divider />
            <List.Item title="Coke" />
            <Divider />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
