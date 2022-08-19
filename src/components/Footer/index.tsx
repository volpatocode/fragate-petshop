import React from "react";

import { FooterAnchor } from "./styles";
import { Footer } from "./styles";
import { FooterBox } from "./styles";
import { FooterImage } from "./styles";

export default function index() {
  return (
    <Footer>
      <FooterBox>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
      </FooterBox>
      <FooterImage src="./Map.png" alt="" />
      <FooterBox>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        <FooterAnchor href="">Qualquer coisa</FooterAnchor>
      </FooterBox>
    </Footer>
  );
}
