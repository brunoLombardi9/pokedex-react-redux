import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Results = ({ currentResult }) => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={5}
    >
      {currentResult.map((pokemon) => {
        return (
          <Box key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Typography textAlign="center">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Typography>
          </Box>
        );
      })}
    </Grid>
  );
};

export default Results;
