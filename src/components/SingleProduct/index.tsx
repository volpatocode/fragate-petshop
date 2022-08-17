import React from "react";
import Icon from "../Icon";

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
          <Icon type="favorite" size="medium" iconcolor="red"/>
          <Icon type="rating" size="small" iconcolor="orange"/>
        </IconsBox>
      </ContentBox>
    </SingleProduct>
  );
}
