import { Box, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import upperCase from "../../utilities/upperCase";
import { Image } from "mui-image";

const PokemonCard = ({ id, name, sprite, types }) => {
  
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
        <Image
          src={sprite}
          alt={name}
          width="100%"
          showLoading={true}
          duration={350}
          sx={{mb:"10px"}}
        />

        <Box
          display="flex"
          justifyContent="space-evenly"
          gap={2}
          margin="auto"
          sx={{
            width: "100px",
          }}
        >
          {types.map((typeObjet) => {
            const type = typeObjet.type.name;
            // const typeIcon = `../../public/${type}.svg`;
            const typeIcon = `/public/${type}.svg`
            

            return (
              <Box width="45%" >
                <Image
                  src={typeIcon}
                  key={type}
                  alt={type}
                  duration={0}
                  onMouseOver={() => console.log(type)}
                  style={{
                    backgroundColor: "black",
                    boxShadow: "0 0 2px ",
                    borderRadius: "100%",
                  }}
                />
              </Box>
            );
          })}
        </Box>

        <Typography textAlign="center">Pokémon n° {id}</Typography>
        <Typography textAlign="center">{upperCase(name)}</Typography>
      </Link>
    </Grid>
  );
};

export default PokemonCard;
