/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { Avatar } from "react-native-paper";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { SafeArea } from "../../../main-components/safe-area";
import { Text } from "../../../main-components/text";
import { Spacer } from "../../../main-components/spacer";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
const CameraContainer = styled.View`
  width: 100%;
  height: 100%;
`;
const CameraIcon = styled(Avatar.Icon)`
  position: absolute;
  top: 515px;
  left: 160px;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);

      AsyncStorage.setItem(`${user.uid}-photo`, data.uri);
      navigation.goBack();
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text variant="error">No access to camera</Text>;
  }
  return (
    <ProfileCamera ref={cameraRef} type={CameraType.front}>
      <CameraContainer>
        <TouchableOpacity onPress={takePicture}>
          <CameraIcon size={100} icon="camera" />
        </TouchableOpacity>
      </CameraContainer>
    </ProfileCamera>
  );
};
