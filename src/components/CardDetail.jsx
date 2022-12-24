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
import { Image } from "mui-image";
import PokemonTypes from "./PokemonTypes";
import PokemonStats from "./PokemonStats";

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

    const promise = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
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

            if (texts.length > 0) {
              setPokemonTexts(texts);
              setGameInfo(texts[0].flavor_text);
              setSelectedGame(texts[0].version.name);
            } else setGameInfo("No tenemos información de este pokémon aun.");
          });
      })
      .catch(() => dispatch(searchStatesActions.setError()));

    Promise.resolve(promise).finally(() =>
      dispatch(searchStatesActions.stopLoading())
    );

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
      {(loading && gameInfo === "") && <CircularProgress />}
      {error && <ErrorPage />}

      {(loading === false && gameInfo !== "") && (
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={{ sm: "90%", md: "60%" }}
        >
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            showLoading={true}
            duration={350}
          />

          <PokemonTypes types={pokemon.types} />

          <Typography textAlign="center" mt={2}>
            Pokémon n° {pokemon.id}
          </Typography>

          <Typography textAlign="center" mb={2}>
            {upperCase(pokemon.name)}
          </Typography>

          <Grid
            container
            sx={{ display: "flex", justifyContent: "center" }}
            gap={1}
          >
            {pokemonTexts.map((text) => {
              const version = text.version.name;
              return (
                <Button
                  key={version}
                  onClick={() => showText(version)}
                  variant={version === selectedGame ? "contained" : "outlined"}
                >
                  {version}
                </Button>
              );
            })}
          </Grid>

          <Typography textAlign="center" mt={2} mb={2}>
            {gameInfo}
          </Typography>

          <PokemonStats stats={pokemon.stats} types={pokemon.types} />
        </Grid>
      )}
    </>
  );
};

export default CardDetail;
