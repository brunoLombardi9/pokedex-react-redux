import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchStatesActions } from "../store/searchStates";
import ErrorPage from "./ErrorPage";

const CardDetail = () => {
  const param = useParams();
  const pokemonName = param.pokemon;
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.searchStates.loading);
  const error = useSelector((state) => state.searchStates.error);

  function pokemonData() {
    dispatch(searchStatesActions.startLoading());

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .then(() => dispatch(searchStatesActions.stopLoading()))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    pokemonData();
  }, [pokemonName]);

  console.log(pokemon);
  return (
    <>
      {loading && <CircularProgress />}
      {error && <ErrorPage />}
      {pokemon !== "" && (
        <>
          {pokemon.name}
          <img src={pokemon.sprites.front_default} alt="" />
        </>
      )}
    </>
  );
};

export default CardDetail;
