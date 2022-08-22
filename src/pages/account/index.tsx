import React, { useState } from "react";
import Circle from "@mui/icons-material/Circle";

import {
  Account,
  AccountFormWrapper,
  AccountImage,
  AccountForm,
  InputBox,
  Input,
  InputPasswordBox,
  InputPassword,
  VisibilityButton,
  ShownIcon,
  HiddenIcon,
  AnchorInfo,
  SubmitButton,
  SignWithMethodBox,
} from "./styles";

import SignWithButton from "../../components/SignWithButton";
import Divider from "../../components/Divider";

export default function index() {
  const [onSignIn, setOnSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Account>
      <AccountFormWrapper>
        <AccountForm>
          <InputBox>
            <Input id="email" type="email" />
          </InputBox>
          <InputBox>
            <InputPasswordBox>
              <InputPassword
                id="password"
                type={showPassword ? "text" : "password"}
              />
              <VisibilityButton onClick={() => handleVisibility()}>
                {showPassword ? <ShownIcon /> : <HiddenIcon />}
              </VisibilityButton>
            </InputPasswordBox>
            <AnchorInfo href="#"> Esqueceu sua senha?</AnchorInfo>
          </InputBox>
          {!onSignIn && (
            <InputBox>
              <InputPasswordBox>
                <InputPassword
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                />
                <VisibilityButton onClick={() => handleVisibility()}>
                  {showPassword ? <ShownIcon /> : <HiddenIcon />}
                </VisibilityButton>
              </InputPasswordBox>
            </InputBox>
          )}
          <SubmitButton>{onSignIn ? "Entrar" : "Cadastrar"}</SubmitButton>
          <Divider />
          <SignWithMethodBox>
            <SignWithButton method="google" />
            <SignWithButton method="facebook" />
          </SignWithMethodBox>
        </AccountForm>
        <AccountImage src="./account-dog.svg" />
      </AccountFormWrapper>
    </Account>
  );
}
