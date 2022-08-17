import React, { useState } from "react";
import SingleProduct from "../components/SingleProduct";

export default function index() {
  return (
    <>
      <SingleProduct
        img="./product.png"
        name="Nome aleatório"
        brand="Abibas"
        price="999,99"
      />
    </>
  );
}
