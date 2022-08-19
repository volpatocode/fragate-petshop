import React from "react";

import { SignWithButton, MethodImage } from "./styles";

type methodsType = {
  method: string;
};

export default function index({ method }: methodsType) {
  if (method == "google") {
    return (
      <SignWithButton>
        <MethodImage src="./g-logo.png" /> Entrar com Google
      </SignWithButton>
    );
  }
  if (method == "facebook") {
    return (
      <SignWithButton>
        <MethodImage src="./fb-logo.png" /> Entrar com Facebook
      </SignWithButton>
    );
  }
}
