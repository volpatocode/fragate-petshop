import styled from "styled-components";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export const CategoryBarButton = styled(ButtonUnstyled)`
  color: #5f5f5f;
  border: none;
  font-size: 1.2rem;
  background-color: transparent;
  border-bottom: solid 5px transparent;
  font-weight: 400;
  box-shadow: none;
  display: inline-block;
  padding: 0.5rem 0.5rem 0 0.5rem;
  margin: 0;
  cursor: pointer;
  :after {
    display: block;
    content: "";
    border-bottom: solid 5px #007FE8;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  :hover:after {
    transform: scaleX(1);
  }
`;

export const CategoryBarItem = styled(MenuItem)`
  color: #5f5f5f;
  display: flex;
  align-items: center;
  box-shadow: none;
  justify-content: space-between;
`;
export const CategoryBarMenu = styled(Menu)`
  color: #5f5f5f;
  display: flex;
  flex-direction: column;
`;
