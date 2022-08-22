import styled from "styled-components";
import { Box } from "@mui/material";
import CircleIcon from '@mui/icons-material/PanoramaFishEye';

export const Divider = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Left = styled(Box)`
  border-bottom: 1px solid #000;
  width: 35%;
`;

export const Middle = styled(Box)`
  padding: 0 0.3rem;
`;

export const Right = styled(Box)`
  border-bottom: 1px solid #000;
  width: 35%;
`;

export const Circle = styled(CircleIcon)`
  color: #000;
`;
