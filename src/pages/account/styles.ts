import styled from "styled-components";
import { Box, Button } from "@mui/material";

export const Account = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  column-gap: 10rem;
`;

export const AccountFormWrapper = styled(Box)`
  width: 50vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccountImageWrapper = styled(Box)`
  width: 50vw;
  height: 100vh;
  display: flex;
`;

export const AccountImage = styled.img`
  width: 100%;
`;

export const AccountForm = styled.form`
  background-color: #fff;
  border-radius: 15px;
  width: 75%;
  padding: 5rem 3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
`;

export const Logo = styled.h2`
  text-align: center;
  font-size: 2rem;
  letter-spacing: 0.3px;
  color: #ff9a57;
  line-height: 1.65;
`;

export const InputBox = styled(Box)`
  width: 100%;
`;

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 0.8);
  padding: 12px 10px;
  border-radius: 8px;
  border: 1px solid #707070;
  outline: none;
  width: 100%;
`;

export const AnchorInfo = styled.a`
  color: #ff9a57;
  font-size: 0.8rem;
`;

export const SubmitButton = styled(Button)`
  background-color:  #ff9a57;
  color: rgba(255, 255, 255, 1);
  width: 100%;
  :hover {
    background-color:  #ff9a57;
  }
  text-transform: none;
`;

export const SignWithMethodBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`;

export const SignWithButton = styled(Button)``;
