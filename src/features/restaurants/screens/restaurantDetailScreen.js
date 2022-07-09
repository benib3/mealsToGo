/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { List } from "react-native-paper";
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
            <List.Item title="Protein breakfast" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={lunchPress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-turkey" />}
            expanded={dinnerExpanded}
            onPress={dinnerPress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
            expanded={drinksExpanded}
            onPress={drinksPress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
