import { Button } from "@mui/material";
import styled from "styled-components";
import { methodsType } from "./index";

export const SignWithButton = styled(Button)<Pick<methodsType, "palette">>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 0.6rem;
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => {
    switch (props.palette) {
      case "google":
        return "#e8e9ee";
      case "facebook":
        return "#3b5998";
      default:
        "rgba(255, 255, 255, 1)";
    }
  }};
  :hover {
    background-color: ${(props) => {
      switch (props.palette) {
        case "google":
          return "#e8e9ee";
        case "facebook":
          return "#3b5998";
        default:
          "rgba(255, 255, 255, 1)";
      }
    }};
  }
  color: ${(props) => {
    switch (props.palette) {
      case "google":
        return "#707070";
      case "facebook":
        return "rgba(255, 255, 255, 1)";
      default:
        "rgba(255, 255, 255, 1)";
    }
  }};
`;

export const MethodImage = styled.img`
  width: 32px;
  height: 32px;
`;
