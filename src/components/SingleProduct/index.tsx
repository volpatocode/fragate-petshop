import React from "react";

import {
  SingleProduct,
  ProductImage,
  ContentBox,
  InfoBox,
  ProductName,
  ProductPrice,
  ProductBrand,
  IconsBox,
} from "./styles";

type productType = {
  img: string;
  name: string;
  price: string;
  brand: string;
};

export default function index({ img, name, price, brand }: productType) {
  return (
    <SingleProduct>
      <ProductImage src={img} />
      <ContentBox>
        <InfoBox>
          <ProductName>{name}</ProductName>
          <ProductPrice>R$ {price}</ProductPrice>
          <ProductBrand>{brand}</ProductBrand>
        </InfoBox>
        <IconsBox></IconsBox>
      </ContentBox>
    </SingleProduct>
  );
}
