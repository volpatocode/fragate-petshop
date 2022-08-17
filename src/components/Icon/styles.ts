import styled from "styled-components";
import Favorite from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/icons-material/Grade";
import Search from "@mui/icons-material/Search";
import Cart from "@mui/icons-material/ShoppingCart";
import Profile from "@mui/icons-material/AccountCircle";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import ArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";
import { iconsType } from "./index";

export const Icon = styled(Box)``;

export const FavoriteIcon = styled(Favorite)<Pick<iconsType, "iconcolor">>`
  color: ${(props) => {
    switch (props.iconcolor) {
      case "orange":
        return "#FF9A57";
      case "grey":
        return "#707070";
      case "yellow":
        return "#FFD600";
      default:
        "#FF9A57";
    }
  }};
`;

export const RatingIcon = styled(Rating)<Pick<iconsType, "iconcolor">>`
  color: ${(props) => {
    switch (props.iconcolor) {
      case "orange":
        return "#FF9A57";
      case "grey":
        return "#707070";
      case "yellow":
        return "#FFD600";
      default:
        "#FFD600";
    }
  }};
`;

export const SearchIcon = styled(Search)<Pick<iconsType, "iconcolor">>`
  color: ${(props) => {
    switch (props.iconcolor) {
      case "orange":
        return "#FF9A57";
      case "grey":
        return "#707070";
      case "yellow":
        return "#FFD600";
      default:
        "#707070";
    }
  }};
`;

export const CartIcon = styled(Cart)<Pick<iconsType, "iconcolor">>`
  color: ${(props) => {
    switch (props.iconcolor) {
      case "orange":
        return "#FF9A57";
      case "grey":
        return "#707070";
      case "yellow":
        return "#FFD600";
      default:
        "#FF9A57";
    }
  }};
`;

export const ProfileIcon = styled(Profile)<Pick<iconsType, "iconcolor">>`
  color: ${(props) => {
    switch (props.iconcolor) {
      case "orange":
        return "#FF9A57";
      case "grey":
        return "#707070";
      case "yellow":
        return "#FFD600";
      default:
        "#707070";
    }
  }};
`;

export const ArrowLIcon = styled(ArrowLeft)<Pick<iconsType, "iconcolor">>`
  color: ${(props) => {
    switch (props.iconcolor) {
      case "orange":
        return "#FF9A57";
      case "grey":
        return "#707070";
      case "yellow":
        return "#FFD600";
      default:
        "#707070";
    }
  }};
`;

export const ArrowRIcon = styled(ArrowRight)<Pick<iconsType, "iconcolor">>`
  color: ${(props) => {
    switch (props.iconcolor) {
      case "orange":
        return "#FF9A57";
      case "grey":
        return "#707070";
      case "yellow":
        return "#FFD600";
      default:
        "#707070";
    }
  }};
`;

export const ArrowDIcon = styled(ArrowDown)<Pick<iconsType, "iconcolor">>`
  color: ${(props) => {
    switch (props.iconcolor) {
      case "orange":
        return "#FF9A57";
      case "grey":
        return "#707070";
      case "yellow":
        return "#FFD600";
      default:
        "#707070";
    }
  }};
`;
