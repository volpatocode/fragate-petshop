import React from "react";
import {
  Icon,
  FavoriteBorderIcon,
  FavoriteIcon,
  RatingIcon,
  SearchIcon,
  CartIcon,
  ArrowRIcon,
  ArrowLIcon,
  ArrowDIcon,
} from "./styles";

export type iconsType = {
  type:
    | "favoriteBorder"
    | "favorite"
    | "rating"
    | "search"
    | "cart"
    | "arrowRight"
    | "arrowLeft"
    | "blog"
    | "logo"
    | "arrowDown";
  size?: "small" | "medium" | "large";
  iconcolor?: "orange" | "grey" | "yellow" | "red";
};

export default function index({ type, size, iconcolor }: iconsType) {
  const icons = {
    favoriteBorder: <FavoriteBorderIcon fontSize={size} />,
    favorite: <FavoriteIcon fontSize={size} />,
    rating: <RatingIcon fontSize={size} />,
    search: <SearchIcon fontSize={size} />,
    cart: <CartIcon fontSize={size} />,
    arrowRight: <ArrowRIcon fontSize={size} />,
    arrowLeft: <ArrowLIcon fontSize={size} />,
    arrowDown: <ArrowDIcon fontSize={size} />,
  };
  return <Icon color={iconcolor}>{icons[type]}</Icon>;
}
