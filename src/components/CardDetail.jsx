import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
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
  const [gameInfo, setGameInfo] = useState("");
  const [selectedGame, setSelectedGame] = useState("");
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
            setGameInfo(texts[0].flavor_text);
            setSelectedGame(texts[0].version.name);
          });
      })
      .catch(() => dispatch(searchStatesActions.setError()))
      .finally(() => dispatch(searchStatesActions.stopLoading()));
  }

  function showText(gameName) {
    setSelectedGame(gameName);
    const text = pokemonTexts.find((text) => {
      return text.version.name === gameName;
    });
    setGameInfo(text.flavor_text);
  }

  useEffect(() => {
    pokemonData();
  }, [pokemonName]);

  return (
    <>
      {loading && <CircularProgress />}
      {error && <ErrorPage />}

      {pokemon !== "" && (
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth="60vw"
        >
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            style={{ width: "50%", margin: "auto" }}
          />

          <Typography textAlign="center">Pokémon n° {pokemon.id}</Typography>

          <Typography textAlign="center" mb={2}>
            {upperCase(pokemon.name)}
          </Typography>

          <Grid
            container
            sx={{ display: "flex", justifyContent: "center" }}
            gap={1}
          >
            {pokemonTexts.map((text) => {
              return (
                <Button
                  onClick={() => showText(text.version.name)}
                  variant={
                    text.version.name === selectedGame
                      ? "contained"
                      : "outlined"
                  }
                >
                  {upperCase(text.version.name)}
                </Button>
              );
            })}
          </Grid>

          <Typography textAlign="center" mt={2}>
            {gameInfo}
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default CardDetail;
