import * as React from "react";
import ProfileIcon from "../ProfileIcon";
import { Cart, LeftBar, NavBar, SideBar, TopBar } from "./styles";
import SearchBar from "../SearchBar";
import IconButton from "../CartButton";
import CategoryBar from "../CategoryBar";

export default function index() {
  return (
    <>
      <NavBar>
        <TopBar>
          <img src="./fragate-main-logo.png" alt="" />
          <SearchBar />
          <LeftBar>
            <Cart>
              <IconButton />
            </Cart>
            <ProfileIcon></ProfileIcon>
          </LeftBar>
        </TopBar>
        <SideBar>
          <CategoryBar />
          <CategoryBar />
          <CategoryBar />
          <CategoryBar />
          <CategoryBar />
          <CategoryBar />
        </SideBar>
      </NavBar>
    </>
  );
}
