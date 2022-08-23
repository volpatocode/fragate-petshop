
import * as React from "react";
import PopupState from "../CategoryBar";
import ProfileIcon from "../ProfileIcon";
import { Cart, LeftBar, NavBar, TopBar } from "./styles";
import SearchBar from "../SearchBar";
import IconButton from "../CartButton";

export default function index() {
  return (
    <>
      <NavBar>
        <TopBar>
          <img src="./fragate-main-logo.png" alt="" />
          <SearchBar />
          <LeftBar>
            <Cart>
            <IconButton/>
            </Cart>
            <ProfileIcon/>
          </LeftBar>
        </TopBar>
      </NavBar>
    </>
  );
}
