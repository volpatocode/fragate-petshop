import styled from "styled-components";
import { Box, Button } from "@mui/material";
import Shown from "@mui/icons-material/Visibility";
import Hidden from "@mui/icons-material/VisibilityOff";

export const PageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  gap: 3.5rem;
`;

export const ContentWrapper = styled(Box)`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 3rem;
  margin: 0 auto;
  width: 50%;
  height: 50%;
`;

export const AccountImage = styled.img`
  width: 50%;
`;

export const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
  width: 50%;
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

export const InputPasswordBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #707070;
`;
export const InputPassword = styled.input`
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 0.8);
  padding: 12px 10px;
  outline: none;
  border-radius: 8px;
  border: none;
  width: 100%;
`;

export const VisibilityButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0px 8px 8px 0px;
  color: #707070;
  :hover {
    color: #707070;
  }
`;

export const ShownIcon = styled(Shown)`
  color: #707070;
`;

export const HiddenIcon = styled(Hidden)`
  color: #707070;
`;

export const AnchorInfo = styled.a`
  color: #ff9a57;
  font-size: 0.8rem;
`;

export const SubmitButton = styled(Button)`
  background-color: #ff9a57;
  color: rgba(255, 255, 255, 1);
  width: 100%;
  :hover {
    background-color: #ff9a57;
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
