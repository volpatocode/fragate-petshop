import React from "react";
import Icons from "../Icons";

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
        <IconsBox>
          <Icons color="orange" size="small" type="favorite" />
          <Icons color="orange" size="small" type="rating"/>
        </IconsBox>
      </ContentBox>
    </SingleProduct>
  );
}
