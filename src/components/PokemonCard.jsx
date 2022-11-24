import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import upperCase from "../../utilities/upperCase";

const PokemonCard = ({ id, name, sprite }) => {
  return (
    <Link
      to={`pokemon/${name}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Box key={id}>
        <img src={sprite} alt={name} />
        <Typography textAlign="center">
          {upperCase(name)}
        </Typography>
      </Box>
    </Link>
  );
};

export default PokemonCard;
