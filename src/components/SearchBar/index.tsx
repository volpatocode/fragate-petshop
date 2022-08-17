import React from "react";
import { Search, SearchIconWrapper, StyledInputBase} from "./style"
import SearchIcon from '@mui/icons-material/Search';


export default function index() {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Pesquisar"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </>
  );
}
