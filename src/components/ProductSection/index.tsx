import React from "react";
import SingleProduct from "../SingleProduct";

import { ProductSection, SectionTitle, SectionContent } from "./styles";

type sectionType = {
  title: string;
};

export default function index({ title }: sectionType) {
  return (
    <>
      <ProductSection>
        <SectionTitle>{title}</SectionTitle>
        <SectionContent>
          <SingleProduct
            img="./product.png"
            name="Nome do produto"
            price="999,66"
            brand="Pedigree"
          />
          <SingleProduct
            img="./product.png"
            name="Nome do produto"
            price="999,66"
            brand="Pedigree"
          />
          <SingleProduct
            img="./product.png"
            name="Nome do produto"
            price="999,66"
            brand="Pedigree"
          />
          <SingleProduct
            img="./product.png"
            name="Nome do produto"
            price="999,66"
            brand="Pedigree"
          />
        </SectionContent>
      </ProductSection>
    </>
  );
}
