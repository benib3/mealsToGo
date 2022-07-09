/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components/native";
import { Platform, Text } from "react-native";
import { WebView } from "react-native-webview";
import { fonts } from "../../../infrastucture/theme/fonts";
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const BoxView = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const MyText = styled.Text`
  margin-top: 5px;
  font-family: ${fonts.heading};
`;
const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;

  return (
    <BoxView>
      <Image source={{ uri: restaurant.photos[0] }} />
      <MyText center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </MyText>
    </BoxView>
  );
};
