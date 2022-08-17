import React from "react";
import {
  Icon,
  FavoriteIcon,
  RatingIcon,
  SearchIcon,
  CartIcon,
  ProfileIcon,
  ArrowRIcon,
  ArrowLIcon,
  ArrowDIcon,
} from "./styles";

export type iconsType = {
  type:
    | "favorite"
    | "rating"
    | "search"
    | "cart"
    | "profile"
    | "arrowRight"
    | "arrowLeft"
    | "blog"
    | "logo"
    | "arrowDown";
  size?: "small" | "medium" | "large";
  iconcolor?: "orange" | "grey" | "yellow";
};

export default function index({ type, size, iconcolor }: iconsType) {
  const icons = {
    favorite: <FavoriteIcon fontSize={size} />,
    rating: <RatingIcon fontSize={size} />,
    search: <SearchIcon fontSize={size} />,
    cart: <CartIcon fontSize={size} />,
    profile: <ProfileIcon fontSize={size} />,
    arrowRight: <ArrowRIcon fontSize={size} />,
    arrowLeft: <ArrowLIcon fontSize={size} />,
    arrowDown: <ArrowDIcon fontSize={size} />,
  };
  return <Icon color={iconcolor}>{icons[type]}</Icon>;
}
