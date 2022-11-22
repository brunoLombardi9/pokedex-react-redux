import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
              <Link
                to={`pokemon/${pokemon.name}`}
                style={{ textDecoration: "none", color: "black"}}
              >
                <Box key={pokemon.id}>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <Typography textAlign="center">
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </Typography>
                </Box>
              </Link>
            );
          })}
        </Grid>
      ) : (
        <Typography>{currentResult[0].name}</Typography>
      )}

      <Box display="flex" justifyContent="center" gap={2} marginTop="20px">
        <Button variant="contained">Anterior</Button>
        <Button variant="contained">Siguiente</Button>
      </Box>
    </Grid>
  );
};

export default Results;
