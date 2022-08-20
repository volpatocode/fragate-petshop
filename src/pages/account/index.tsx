import Image from "next/image";
import React, { useState } from "react";
import Circle from "@mui/icons-material/Circle";

import {
  Account,
  AccountFormWrapper,
  AccountImageWrapper,
  AccountForm,
  InputBox,
  Input,
  SubmitButton,
  SignWithMethodBox,
} from "./styles";

import SignWithButton from "../../components/SignWithButton";

import { Divider } from "@mui/material";
export default function index() {
  const [onSignIn, setOnSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Account>
      <AccountFormWrapper>
        <AccountForm>
          {/* <Image src="/fragate-main-logo.png" width="80px" height="60px" /> */}
          <InputBox>
            <Input id="email" type="email" />
          </InputBox>
          <InputBox>
            <Input id="password" type={showPassword ? "text" : "password"} />
          </InputBox>
          {onSignIn && (
            <InputBox>
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
              />
            </InputBox>
          )}
          <SubmitButton>{onSignIn ? "Entrar" : "Cadastrar"}</SubmitButton>
        </AccountForm>
        <Divider>
          <Circle fontSize="small" />
        </Divider>
        <SignWithMethodBox>
          <SignWithButton method="google"/>
          <SignWithButton method="facebook"/>
        </SignWithMethodBox>
      </AccountFormWrapper>
      <AccountImageWrapper>
        <img src="./account-dog.svg"/>
      </AccountImageWrapper>
    </Account>
  );
}
