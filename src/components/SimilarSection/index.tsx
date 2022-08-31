import React from "react";

import "react-multi-carousel/lib/styles.css";
import SingleProduct from "../SingleProduct";
import { Carousel, SimilarSection, SectionTitle } from "./styles";
import useMediaQuery from '@mui/material/useMediaQuery';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  }
};

type sectionType = {
  title: string;
};

export default function index({}: sectionType) {
  const tablet = useMediaQuery('(max-width:1024px)');

  return (
    <SimilarSection>
      <SectionTitle>Produtos similares</SectionTitle>
      <Carousel responsive={responsive}
       swipeable={tablet ? true : false} 
       draggable={tablet ? true : false}
       showDots={false}
       removeArrowOnDeviceType={["tablet", "mobile"]}
       itemClass="carousel-item"
       
       >
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
        <SingleProduct
          img="./product.png"
          name="Nome do produto"
          price="999,66"
          brand="Pedigree"
        />
      </Carousel>
    </SimilarSection>
  );
}
