import { Box } from "@mui/material";
import React from "react";
import typeStyles from "../../utilities/typeStyles";

const PokemonTypes = ({ types }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      gap={2}
      margin="auto"
      width="100px"
    >
      {types.map((typeObjet) => {
        const type = typeObjet.type.name;
        const typeIcon = `/${type}.svg`;
        const backgroundColor = typeStyles[type].backgroundColor;
        const boxShadow = typeStyles[type].boxShadow;

        return (
          <Box
            width="40px"
            height="40px"
            backgroundColor={backgroundColor}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="100px"
            boxShadow={boxShadow}
            key={type}
          >
            <img
              src={typeIcon}
              key={type}
              alt={type}
              duration={0}
              onMouseOver={() => console.log(type)}
              style={{
                backgroundColor: backgroundColor,
                borderRadius: "100px",
                width: "30px",
                height: "30px",
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default PokemonTypes;
