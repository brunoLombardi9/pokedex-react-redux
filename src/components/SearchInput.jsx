import { TextField } from "@mui/material";
import React from "react";

const SearchInput = ({ formInput, retainInput, loading }) => {
  return (
    <TextField
      label="Pokémon"
      type="text"
      value={formInput}
      onChange={retainInput}
      disabled={loading}
    />
  );
};

export default SearchInput;
