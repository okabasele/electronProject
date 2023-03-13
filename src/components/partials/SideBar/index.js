import React from "react";
import styled from "styled-components";

const SideBar = () => {
  const recommand = [
    {
      id: 1,
      name: "Pour vous",
      icon: "",
      url: "",
    },
    {
      id: 2,
      name: "Nouveautés",
      icon: "",
      url: "",
    },
    {
      id: 3,
      name: "Tendances",
      icon: "",
      url: "",
    },
    {
      id: 4,
      name: "Podcasts",
      icon: "",
      url: "",
    },
    {
      id: 5,
      name: "iTunes Store",
      icon: "",
      url: "",
    },
  ];

  const musicCategory = [
    {
      id: 1,
      name: "Bibliothèque",
      icon: "",
      url: "",
    },
    {
      id: 2,
      name: "Artistes",
      icon: "",
      url: "",
    },
    {
      id: 3,
      name: "Albums",
      icon: "",
      url: "",
    },
  ];

  const playlists = [
    {
      id: 1,
      name:"Hip-hop",
      icon: "",
      url: "",
    },
  ];



  return (
    <StyledNav>
      <StyledUl>
        <StyledLiHeader>Recommandations</StyledLiHeader>
        {recommand.map((rec) => (
          <StyledLi key={rec.id}>
            <StyledImage src={rec.icon} alt="rec icon" />
            <span>{rec.name}</span>
          </StyledLi>
        ))}

        <StyledLiHeader>Musiques</StyledLiHeader>
        {musicCategory.map((category) => (
          <StyledLi key={category.id}>
            <StyledImage src={category.icon} alt="music Category icon" />
            <span>{category.name}</span>
          </StyledLi>
        ))}
        <StyledLiHeader>Playlists</StyledLiHeader>
        {playlists.map((playlist) => (
          <StyledLi key={playlist.id}>
            <StyledImage src={playlist.icon} alt="playlist icon" />
            <span>{playlist.name}</span>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: inline-block;
  min-height: 100vh;
  width: 80px;
  border: 1px solid gray;
  float: left;
`;

const StyledUl = styled.ul`
  text-align: center;
  color: white;
`;

const StyledLi = styled.li`
  padding: 28px 0;
  cursor: pointer;
`;

const StyledLiHeader = styled.li`
  font-weight: 600;
  padding: 10px 25px;
  font-size: 0.8em;
  letter-spacing: 2px;
  transition: opacity 0.3s;
  opacity: 0.5;
  text-transform: uppercase;
`;

const StyledImage = styled.img`
  width: 30px;
  height: 30px;
`;
export default SideBar;
