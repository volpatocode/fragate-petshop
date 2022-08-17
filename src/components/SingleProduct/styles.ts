import styled from "styled-components";

export const SingleProduct = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const ProductImage = styled.img``;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.p`
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
`;

export const ProductBrand = styled.p`
  margin-top: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const IconsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
