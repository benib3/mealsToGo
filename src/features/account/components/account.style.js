/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { colors } from "../../../infrastucture/theme/colors";
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
