import styled from "styled-components";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export const CategoryBarButton = styled(Button)`
  color: #5f5f5f;
  font-weight: 400;
  box-shadow: none;
  background-color: transparent;
  display: inline-block;
  margin: 0;
  :after {
    display: block;
    content: "";
    border-bottom: solid 3px #007FE8;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  :hover:after {
    transform: scaleX(1);
  }
  :hover {
    background-color: transparent;
    box-shadow: none;
  }
`;
export const CategoryBarItem = styled(MenuItem)`
  color: #5f5f5f;
  display: flex;
  align-items: center;
  box-shadow: none;
  justify-content: space-between;
`;
export const CategoryBarButtonMenu = styled(Menu)`
  color: #5f5f5f;
  display: flex;
  flex-direction: column;
`;
