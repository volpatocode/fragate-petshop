import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
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

export const SideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 2rem 0;
`;


