import React from "react";

import { SignWithButton, MethodImage } from "./styles";

export type methodsType = {
  method: string;
  palette?: string;
};

export default function index({ method, palette }: methodsType) {
  if (method == "google") {
    return (
      <SignWithButton palette="google">
        <MethodImage src="./g-icon.svg" /> Entrar com Google
      </SignWithButton>
    );
  }
  if (method == "facebook") {
    return (
      <SignWithButton palette="facebook">
        <MethodImage src="./fb-icon.svg" /> Entrar com Facebook
      </SignWithButton>
    );
  }
}
