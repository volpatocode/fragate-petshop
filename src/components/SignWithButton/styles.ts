import { Button } from "@mui/material";
import styled from "styled-components";

export const SignWithButton = styled(Button)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  padding: 0.4rem 0.6rem;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 0.4);
  font-weight: 600;
  width: 100%;
  :hover {
    background-color: rgba(255, 255, 255, 0.85);
  }
`;

export const MethodImage = styled.img`
  width: 45px;
  height: 45px;
`;
