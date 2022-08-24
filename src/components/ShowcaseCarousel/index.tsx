import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Img, ShowcaseCarousel } from "./styles";

export default function index() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 10000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <ShowcaseCarousel>
      <Carousel
        responsive={responsive}
        showDots={true}
        renderDotsOutside={false}
        dotListClass="dots"
        autoPlay={true}
        arrows={false}
        infinite={true}
        autoPlaySpeed={5000}
      >
        <Img src="./Showcase1.svg" />
        <Img src="./Showcase2.svg" />
        <Img src="./Showcase3.svg" />
        <Img src="./Showcase4.svg" />
        <Img src="./Showcase5.svg" />
      </Carousel>
    </ShowcaseCarousel>
  );
}
