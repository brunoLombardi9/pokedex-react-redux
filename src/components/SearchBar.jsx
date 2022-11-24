import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentResultActions } from "../store/currentResult";
import { searchStatesActions } from "../store/searchStates";
import { GenSelector, SearchInput } from "./";

const SearchBar = () => {
  const [formInput, setFormInput] = useState("");
  const [currentGen, setCurrentGen] = useState(1);
  const currentResult = useSelector((state) => state.currentResult);
  const loading = useSelector((state) => state.searchStates.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function retainInput(event) {
    setFormInput(event.target.value);
  }

  function retainGen(event) {
    setCurrentGen(event.target.value);
  }

  function resetSearch() {
    setCurrentGen(1);
    setFormInput("");
    searchPokemon()
  }

  function errorActions(err) {
    console.log(err);
    dispatch(searchStatesActions.setError());
    dispatch(searchStatesActions.stopLoading());
    console.log(`No encontramos a ${formInput}`);
  }

  function individualSearch() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${formInput.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(searchStatesActions.stopLoading());
        dispatch(currentResultActions.retainResult(data));
      })
      .catch((error) => errorActions(error));
  }

  function multipleSearch() {
    const urlToFetch = `https://pokeapi.co/api/v2/generation/${currentGen}`;

    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => {
        const searchData = data.pokemon_species;

        const pokemonUrls = searchData.map((pokemon) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((res) => res.json())
            .then((data) => dispatch(currentResultActions.retainResult(data)))
            .catch((error) => console.log(error))
        );

        Promise.all(pokemonUrls).then(() =>
          dispatch(searchStatesActions.stopLoading())
        );
      })

      .catch((error) => {
        errorActions(error);
      });
  }

  function searchPokemon() {
    event.preventDefault();
    dispatch(searchStatesActions.startLoading());
    dispatch(searchStatesActions.clearError());
    dispatch(currentResultActions.deleteResult());
    navigate("/");
    formInput !== "" ? individualSearch() : multipleSearch();
    setFormInput("");
  }

  useEffect(() => {
    if (currentResult.lenght === 0) {
      multipleSearch();
    }
  }, []);

  return (
    <form onSubmit={searchPokemon}>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "0.5rem",
          minWidth: { xs: "auto", md: "60vw" },
          height: "fit-content",
          padding: "1rem",
          margin: "1rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <SearchInput formInput={formInput} retainInput={retainInput} />
        <GenSelector
          currentGen={currentGen}
          retainGen={retainGen}
          formInput={formInput}
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={loading}
        >
          Buscar
        </Button>

        <Button
          variant="contained"
          color="delete"
          onClick={resetSearch}
          disabled={loading}
        >
          Reiniciar
        </Button>
      </Box>
    </form>
  );
};

export default SearchBar;
