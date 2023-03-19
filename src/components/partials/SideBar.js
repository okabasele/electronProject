import React from "react";
import { useLocation,Link } from "react-router-dom";
import styled from "styled-components";
const SideBar = () => {
  const location = useLocation();
  return (
    <SideBarContainer>
      <StyledLogo
        src="https://www.seekpng.com/png/full/16-169113_itunes-white-logo-png-itunes-apple.png"
        alt="logo"
      />
      {location.pathname === "/" ? (
        <ActiveNavLink to="/">
          <MenuIconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          </MenuIconWrapper>
          <StyledText>Accueil</StyledText>
        </ActiveNavLink>
      ) : (
        <NavLink to="/">
          <MenuIconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          </MenuIconWrapper>
          <StyledText>Accueil</StyledText>
        </NavLink>
      )}

      {location.pathname === "/search" ? (
        <ActiveNavLink to="/search">
          <MenuIconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </MenuIconWrapper>
          <StyledText>Search</StyledText>
        </ActiveNavLink>
      ) : (
        <NavLink to="/search">
          <MenuIconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </MenuIconWrapper>
          <StyledText>Rechercher</StyledText>
        </NavLink>
      )}

      <SubMenuTitle>Playlists</SubMenuTitle>
      <NavLink>
        <SubMenuIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
          </svg>
        </SubMenuIcon>
        <StyledText>Ajouter une musique</StyledText>
      </NavLink>
      <NavLink to="/uploaded">
        <SubMenuIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
          </svg>
        </SubMenuIcon>
        <StyledText>Titres installés</StyledText>
      </NavLink>
      <NavLink to="/liked">
        <SubMenuIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
        </SubMenuIcon>
        <StyledText>Titres likés</StyledText>
      </NavLink>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #040404;
  padding: 20px;
  min-width: 200px;
  z-index: 999;
`;

const StyledLogo = styled.img`
  width: 130px;
  height: auto;
`;

const NavLink = styled(Link)`
  display: flex;
  margin-top: 20px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  :hover * {
    color: #ffffff;
    fill: #ffffff;
  }
`;
const StyledText = styled.p`
  font-size: 16px;
  color: #b3b3b3;
  margin: 0px;
`;
const ActiveNavLink = styled(Link)`
  padding-left: 10px;
  margin-left: -12px;
  margin-top: 20px;
  height: 45px;
  background-color: #282828;
  display: flex;
  align-items: center;
  align-self: center;
  border-radius: 5px;
  text-decoration: none;
  color: #ffffff;
  :hover * {
    color: #ffffff;

    fill: #ffffff;
  }
`;
const MenuIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-right: 16px;

  path {
    fill: #b3b3b3;
  }
`;
const SubMenuTitle = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  margin-top: 40px;
  text-transform: uppercase;
  color: #b3b3b3;
`;
const SubMenuIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  svg {
    width: 16px;
    height: 16px;
  }
`;

export default SideBar;
