import { Box, Rating } from "@mui/material";
import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductName } from "../SingleProduct/styles";
import { Img, ProductSlider, Star, BoxInteration} from "./styles";
import Icon from "../Icon";

type productType = {
  name: string;
};

export default function index({ name }: productType) {
  const responsive = {
    singleItem: {
      breakpoint: { max: 10000, min: 1 },
      items: 1,
    },
  };

  return (
    <>
      <ProductName>{name}</ProductName>
      <ProductSlider>
        <Carousel
          responsive={responsive}
          showDots={true}
          renderDotsOutside={false}
          dotListClass="dots"
          autoPlay={false}
          arrows={true}
          infinite={true}
          autoPlaySpeed={10000}
          draggable={false}
        >
          <Img src="./3d-finotrato-prime-adultos-rpm.png" />
          <Img src="./finotrato-prime-adultos-rpm.png" />
        </Carousel>
      </ProductSlider>
      <BoxInteration>
        <Rating
          icon={<Star />}
          name="read-only"
          value={2.5}
          precision={0.5}
          readOnly
        />
        <Icon type="favoriteBorder" iconcolor="red" size="medium" />
      </BoxInteration>
    </>
  );
}
