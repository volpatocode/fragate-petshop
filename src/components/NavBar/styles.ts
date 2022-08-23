import styled from "styled-components";
import { Box, Container } from "@mui/material";
import { navbarType } from "./index";


export const NavBar = styled(Box)<navbarType>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.type !== "default" ? "1rem 0" : "1rem 0 0 0")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const NavBarContainer = styled(Container)`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
`;

export const Logo = styled.img`
  aspect-ratio: 16 / 9;
  width: 130px;
`;

export const MainBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 3rem 0rem;
  gap: 5rem;
`;

export const LeftBar = styled(Box)`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Cart = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CategoryBar = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 2rem;
`;