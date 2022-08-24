import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const PostSection = styled(Box)`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 2rem;
`;

export const Post = styled(Box)`
  background-color: rgba(0, 0, 0, 16%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 0.5rem 1rem;
  aspect-ratio: 4 / 3;
  text-align: center;
  border-radius: 8px;
`;

export const PostImage = styled.div`
  background-color: #f3f3f3;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const PostButton = styled(Button)`
  background-color: #707070;
  color: #000;
  border-radius: 20px;
  margin-top: 3rem;
  text-transform: none;
  :hover {
    background-color: #707070;
  }
`;
