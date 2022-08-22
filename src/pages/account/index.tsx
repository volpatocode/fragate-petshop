import React, { useState } from "react";
import Circle from "@mui/icons-material/Circle";

import {
  Account,
  AccountFormWrapper,
  AccountImageWrapper,
  AccountImage,
  Logo,
  AccountForm,
  InputBox,
  Input,
  AnchorInfo,
  SubmitButton,
  SignWithMethodBox,
} from "./styles";

import SignWithButton from "../../components/SignWithButton";
import Divider from "../../components/Divider";

export default function index() {
  const [onSignIn, setOnSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Account>
      <AccountFormWrapper>
        <AccountForm>
          <InputBox>
            <Input id="email" type="email" />
          </InputBox>
          <InputBox>
            <Input id="password" type={showPassword ? "text" : "password"} />
            <AnchorInfo href="#"> Esqueceu sua senha?</AnchorInfo>
          </InputBox>
          {!onSignIn && (
            <InputBox>
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
              />
            </InputBox>
          )}
          <SubmitButton>{onSignIn ? "Entrar" : "Cadastrar"}</SubmitButton>
          <Divider/>
          <SignWithMethodBox>
            <SignWithButton method="google" />
            <SignWithButton method="facebook" />
          </SignWithMethodBox>
        </AccountForm>
      </AccountFormWrapper>
      <AccountImageWrapper>
        <AccountImage src="./account-dog.svg" />
      </AccountImageWrapper>
    </Account>
  );
}
