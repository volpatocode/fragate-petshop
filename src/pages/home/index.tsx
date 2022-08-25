import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import PostSection from "../../components/PostSection";
import ProductSection from "../../components/ProductSection";
import ShowcaseCarousel from "../../components/ShowcaseCarousel";

import { Home, MainContainer } from "./styles";

export default function index() {
  return (
    <Home>
      <NavBar type="default" />
      <ShowcaseCarousel />
      <PostSection />
      <MainContainer maxWidth="xl">
        <ProductSection title="Mais vendidos" />
        <ProductSection title="Marcas exclusivas" />
      </MainContainer>
      <Footer />
    </Home>
  );
}
