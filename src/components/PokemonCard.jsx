import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ id, name, sprite }) => {
  return (
    <Link
      to={`pokemon/${name}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Box key={id}>
        <img src={sprite} alt={name} />
        <Typography textAlign="center">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
      </Box>
    </Link>
  );
};

export default PokemonCard;
