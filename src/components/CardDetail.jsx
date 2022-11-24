import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import upperCase from "../../utilities/upperCase";
import { searchStatesActions } from "../store/searchStates";
import ErrorPage from "./ErrorPage";

const CardDetail = () => {
  const param = useParams();
  const pokemonName = param.pokemon;
  const [pokemon, setPokemon] = useState("");
  const [pokemonTexts, setPokemonTexts] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.searchStates.loading);
  const error = useSelector((state) => state.searchStates.error);

  function pokemonData() {
    dispatch(searchStatesActions.startLoading());

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        const pokemonData = data.species.url;

        fetch(pokemonData)
          .then((res) => res.json())
          .then((data) => {
            const texts = data.flavor_text_entries.filter((text) => {
              return text.language.name === "es";
            });
            setPokemonTexts(texts);
          });
      })
      .catch(() => dispatch(searchStatesActions.setError()))
      .finally(() => dispatch(searchStatesActions.stopLoading()));
  }

  useEffect(() => {
    pokemonData();
  }, [pokemonName]);

  console.log(pokemonTexts);

  return (
    <>
      {loading && <CircularProgress />}
      {error && <ErrorPage />}

      {pokemon !== "" && (
        <Grid display="flex" flexDirection="column" justifyContent="center">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            style={{ width: "50%", margin: "auto" }}
          />

          <Typography textAlign="center" mb={2}>
            {upperCase(pokemon.name)}
          </Typography>

          {pokemonTexts.length > 0 && (
            <Grid gap={2} display="flex" flexDirection="column">
              {pokemonTexts.map((text) => {
                return (
                  <Box display="flex" flexDirection="column">
                    <Typography textAlign="center">
                      {upperCase(text.version.name)}:
                    </Typography>
                    <Typography textAlign="center">
                      {text.flavor_text}
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
};

export default CardDetail;
