import React from "react";

import { Divider, Left, Middle, Right, Circle } from "./styles";

export default function index() {
  return (
    <Divider>
      <Left />
      <Middle><Circle fontSize="small"/></Middle>
      <Right />
    </Divider>
  );
}
