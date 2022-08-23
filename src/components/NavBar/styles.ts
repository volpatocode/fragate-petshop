import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  height: 90px;
  img {
    height: 100%;
  }
  justify-content: space-between;
  align-items: center;
  margin: 0rem 3rem 0rem;
  gap: 20rem;
`;

export const LeftBar = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
