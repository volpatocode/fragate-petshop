import React from "react";

import {
  Footer,
  FooterContainer,
  FooterBox,
  FooterImage,
  FooterAnchor,
} from "./styles";

export default function index() {
  return (
    <Footer>
      <FooterContainer maxWidth="xl">
        <FooterBox>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        </FooterBox>
        <FooterImage src="./Map.png" />
        <FooterBox>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
          <FooterAnchor href="">Qualquer coisa</FooterAnchor>
        </FooterBox>
      </FooterContainer>
    </Footer>
  );
}
