import React from "react";
import SingleProduct from "../SingleProduct";

import { ProductSection, SectionTitle } from "./styles";

import { Grid } from "@mui/material";

type sectionType = {
  title: string;
};

export default function index({ title }: sectionType) {
  return (
    <>
      <ProductSection>
        <SectionTitle>{title}</SectionTitle>
        <Grid container spacing={4}>
          <Grid item xs={4} md={3} lg={2}>
            <SingleProduct
              img="./product.png"
              name="Nome do produto"
              price="999,66"
              brand="Pedigree"
            />
          </Grid>
          <Grid item xs={4} md={3} lg={2}>
            <SingleProduct
              img="./product.png"
              name="Nome do produto"
              price="999,66"
              brand="Pedigree"
            />
          </Grid>
          <Grid item xs={4} md={3} lg={2}>
            <SingleProduct
              img="./product.png"
              name="Nome do produto"
              price="999,66"
              brand="Pedigree"
            />
          </Grid>
          <Grid item xs={4} md={3} lg={2}>
            <SingleProduct
              img="./product.png"
              name="Nome do produto"
              price="999,66"
              brand="Pedigree"
            />
          </Grid>
          <Grid item xs={4} md={3} lg={2}>
            <SingleProduct
              img="./product.png"
              name="Nome do produto"
              price="999,66"
              brand="Pedigree"
            />
          </Grid>
          <Grid item xs={4} md={3} lg={2}>
            <SingleProduct
              img="./product.png"
              name="Nome do produto"
              price="999,66"
              brand="Pedigree"
            />
          </Grid>
        </Grid>
      </ProductSection>
    </>
  );
}
