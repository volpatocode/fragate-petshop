import { Box, Container } from "@mui/material";
import styled from "styled-components";

export const Footer = styled(Box)`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: -3px -3px rgba(0, 0, 0, 0.15);
  margin-top: 3.5rem;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
`;

export const FooterAnchor = styled.a`
  text-decoration: none;
  color: grey;
  display: flex;
  :hover {
    text-decoration: underline;
  }
`;

export const FooterBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterImage = styled.img``;
