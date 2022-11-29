import { Box, Button, Grid } from "@mui/material";
import React from "react";
import PokemonCard from "./PokemonCard";

const Results = ({ currentResult }) => {
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
            id={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprites.other["official-artwork"].front_default}
          />
        );
      })}

      {/* 
      <Box display="flex" justifyContent="center" gap={2} marginTop="20px">
        <Button variant="contained">Anterior</Button>
        <Button variant="contained">Siguiente</Button>
      </Box> */}
    </Grid>
  );
};

export default Results;
