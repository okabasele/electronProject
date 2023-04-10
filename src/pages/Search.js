import React from "react";
import styled from "styled-components";
import GenreCard from "../components/UI/GenreCard";
import genres from "../data/genres";

const Search = () => {
  return (
    <>
      <StyledTitle>Parcourir tout</StyledTitle>
      <StyledGenreList>
        {genres.map(({ title, img, bgColor }) => {
          return (
            <GenreCard title={title} img={img} bgColor={bgColor} key={title} />
          );
        })}
      </StyledGenreList>
    </>
  );
};
const StyledGenreList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 20px;
  width: auto;
`;

const StyledTitle = styled.h2`
  color: #ffffff;
  margin-left: 20px;
  font-size: 1.5rem;
`;

export default Search;
