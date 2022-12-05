import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";


const GenSelector = ({ currentGen, retainGen, formInput, loading }) => {
  const gensOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <FormControl disabled={formInput || loading}>
      <InputLabel>Gen</InputLabel>
      <Select
        value={currentGen}
        label="Gen"
        onChange={retainGen}
        sx={{ minWidth: "150px", textAlign: "center" }}
      >
        {gensOptions.map((gen) => {
          return (
            <MenuItem key={gen} value={gen}>
              {`Generación ${gen}`}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default GenSelector;
