import styled from "styled-components";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from '@mui/icons-material/Favorite';
import Rating from "@mui/icons-material/Star";
import Search from "@mui/icons-material/Search";
import Cart from "@mui/icons-material/ShoppingCart";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import ArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";
import { iconsType } from "./index";

export const Icon = styled(Box)`
  display: flex;
  align-items: center;
`;

export const FavoriteBorderIcon = styled(FavoriteBorder)<Pick<iconsType, "iconcolor">>`
  color: ${(props) => {
    switch (props.iconcolor) {
      case "orange":
        return "#FF9A57";
      case "grey":
        return "#707070";
      case "yellow":
        return "#FCDC65";
      default:
        "#FF9A57";
    }
  }};
`;

export const FavoriteIcon = styled(Favorite)<Pick<iconsType, "iconcolor">>`
  color: ${(props) => {
    switch (props.iconcolor) {
      case "orange":
        return "#FF9A57";
      case "grey":
        return "#707070";
      case "yellow":
        return "#FCDC65";
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
        return "#FCDC65";
      case "red":
        return "red";

      default:
        "#FCDC65";
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
        return "#FCDC65";
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
        return "#FCDC65";
      default:
        "#FF9A57";
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
        return "#FCDC65";
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
        return "#FCDC65";
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
        return "#FCDC65";
      default:
        "#707070";
    }
  }};
`;
