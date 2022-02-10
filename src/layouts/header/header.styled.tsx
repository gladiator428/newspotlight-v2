import styled from "styled-components";

export const HeaderWrapper = styled.div`
  transition: 0.3s all;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

export const HeaderText = styled.div`
  background-color: #c0bcfc;
  text-align: center;
  padding: 10px 0;
  color: white;
  font-size: clamp(15px, 4.3vw, 18px);
  font-weight: 700;
`;

export const HeaderMenu = styled.div`
  transition: 0.3s all;
  padding: 28px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > :first-child {
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
`;

export const MenuGroup = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 25px;
  }
  margin-left: 59px;
`;

export const MenuItem = styled.div`
  font-size: 21px;
  font-weight: 500;
  a {
    color: #051730;
    text-decoration: none;
    transition: 0.3s all;
    :hover {
      color: #c0bcfc;
    }
  }
`;

export const DiscordBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 7px 20px;
  background-color: #051730;
  border-radius: 50px;
  color: white;
  transition: all 0.3s;
  svg {
    width: 29px;
    height: 29px;
  }
  :hover {
    background-color: #c0bcfc;
  }
`;
