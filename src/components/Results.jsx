import { Box, Button, Grid } from "@mui/material";
import React from "react";
import PokemonCard from "./PokemonCard";

const Results = ({ currentResult }) => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {currentResult.length > 1 ? (
        <Grid container display="flex" justifyContent="center" gap={5}>
          {currentResult.map((pokemon) => {
            return (
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                sprite={pokemon.sprites.front_default}
              />
            );
          })}
        </Grid>
      ) : (
        <PokemonCard
          id={currentResult[0].id}
          name={currentResult[0].name}
          sprite={currentResult[0].sprites.front_default}
        />
      )}

      <Box display="flex" justifyContent="center" gap={2} marginTop="20px">
        <Button variant="contained">Anterior</Button>
        <Button variant="contained">Siguiente</Button>
      </Box>
    </Grid>
  );
};

export default Results;
