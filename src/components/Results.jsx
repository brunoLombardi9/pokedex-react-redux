import { Box, Button, Grid } from "@mui/material";
import React from "react";
import GoUpIcon from "./GoUpIcon";
import PokemonCard from "./PokemonCard";

const Results = ({ currentResult }) => {
  console.log(currentResult)
  return (
    <Grid
      container={true}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={5}
    >
      {currentResult.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprites.other["official-artwork"].front_default}
            types={pokemon.types}
          />
        );
      })}
      <GoUpIcon />
    </Grid>
  );
};

export default Results;
