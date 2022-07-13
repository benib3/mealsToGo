/* eslint-disable prettier/prettier */
import React from "react";
import { Spacer } from "../../main-components/spacer";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../account/components/account.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="key"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
