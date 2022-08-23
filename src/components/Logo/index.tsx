import Link from "next/link";
import React from "react";
import { Logo } from "./styles";

type logoType = {
  size: "small" | "medium" | "large";
};

export default function index({ size }: logoType) {
  const logoWidth = {
    small: "90px",
    medium: "130px",
    large: "165px",
  };

  return (
    <Link href="/">
      <Logo src="./fragate-main-logo.svg" width={logoWidth[size]} />
    </Link>
  );
}
