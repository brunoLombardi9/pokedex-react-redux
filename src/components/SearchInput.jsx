import { TextField } from "@mui/material";
import React from "react";

const SearchInput = ({ formInput, retainInput }) => {
  return (
    <TextField
      label="Pokémon"
      type="text"
      value={formInput}
      onChange={retainInput}
    />
  );
};

export default SearchInput;
