import { Button } from "@mui/material";
import styled from "styled-components";

export const SignWithButton = styled(Button)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 0.8rem;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 600;
  width: 100%;
  :hover {
    background-color: transparent;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const MethodImage = styled.img`
  width: 45px;
  height: 45px;
`;
