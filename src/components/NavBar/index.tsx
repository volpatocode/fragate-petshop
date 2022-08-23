import React from "react";
import {
  Cart,
  LeftBar,
  NavBar,
  CategoryBar,
  MainBar,
  NavBarContainer,
} from "./styles";

import ProfileIcon from "../ProfileIcon";
import SearchBar from "../SearchBar";
import IconButton from "../CartButton";
import CategoriesMenu from "../CategoriesMenu";
import Logo from "../Logo";

export type navbarType = {
  type: "default" | "account";
};

export default function index({ type }: navbarType) {
  if (type === "default") {
    return (
      <NavBar type={type}>
        <NavBarContainer maxWidth="xl">
          <MainBar>
            <Logo size="medium" />
            <SearchBar />
            <LeftBar>
              <Cart>
                <IconButton />
              </Cart>
              <ProfileIcon />
            </LeftBar>
          </MainBar>
          <CategoryBar>
            <CategoriesMenu />
            <CategoriesMenu />
            <CategoriesMenu />
            <CategoriesMenu />
            <CategoriesMenu />
            <CategoriesMenu />
          </CategoryBar>
        </NavBarContainer>
      </NavBar>
    );
  }
  if (type === "account") {
    return (
      <NavBar type={type}>
        <NavBarContainer maxWidth="xl">
          <Logo size="medium" />
        </NavBarContainer>
      </NavBar>
    );
  }
}
