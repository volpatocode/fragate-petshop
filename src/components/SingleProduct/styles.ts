import { Box } from "@mui/material";
import styled from "styled-components";

export const SingleProduct = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 1);
`;

export const ProductImage = styled.img`
`;

export const ContentBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.p`
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 0.9rem;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
`;

export const ProductBrand = styled.p`
  margin-top: 0.4rem;
  font-size: 0.7rem;
  font-weight: 600;
`;

export const IconsBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
