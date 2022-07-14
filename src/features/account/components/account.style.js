/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { colors } from "../../../infrastucture/theme/colors";
import { Text } from "../../../main-components/text";
import { Button, TextInput } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  background-color: rgba(255, 255, 255, 0.7);
`;
export const LoginContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  background-color: rgba(255, 255, 255, 0.7);
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 40px;
  margin-top: ${(props) => props.theme.space[5]};
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
export const AnimationWrapper = styled.View`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
