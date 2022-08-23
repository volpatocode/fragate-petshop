import styled from "styled-components";
import { styled as styledMui, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const SearchBar = styled.div`
  background-color: rgba(217, 217, 217, 0.45);
`;

export const Search = styledMui("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "transparent",
  border: "1px solid rgba(33, 33, 33, 0.5)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "100%",
  },
}));

export const SearchIconWrapper = styledMui("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styledMui(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));
