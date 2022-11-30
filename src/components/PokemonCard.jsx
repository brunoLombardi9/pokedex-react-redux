import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import upperCase from "../../utilities/upperCase";
import { Image } from 'mui-image'

const PokemonCard = ({ id, name, sprite }) => {
  return (
    <Grid
      key={id}
      item
      xs={8}
      s={6}
      md={3}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Link
        to={`pokemon/${name}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Image src={sprite} alt={name} width="100%" showLoading={ true } duration={350}/>
        <Typography textAlign="center">Pokémon n° {id}</Typography>
        <Typography textAlign="center">{upperCase(name)}</Typography>
      </Link>
    </Grid>
  );
};

export default PokemonCard;
