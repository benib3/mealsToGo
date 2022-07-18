/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { List, Avatar, Divider } from "react-native-paper";
import { SafeArea } from "../../../main-components/safe-area";
import { Text } from "../../../main-components/text";
import { Spacer } from "../../../main-components/spacer";
import { colors } from "../../../infrastucture/theme/colors";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(225, 225, 225, 0.2);
  border-style: solid;
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfile = async (currentUser) => {
    const ph = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(ph);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfile(user);
    }, [user])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon
              size={160}
              icon="human"
              backgroundColor={colors.brand.primary}
            />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <Spacer />
        <SettingsItem
          title="Favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <Spacer />
        <Divider />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
