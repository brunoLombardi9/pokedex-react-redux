import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentResultActions } from "../store/currentResult";
import { searchStatesActions } from "../store/searchStates";
import { GenSelector, SearchInput } from "./";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState("");
  const [currentGen, setCurrentGen] = useState(0);
  const [reset, setReset] = useState(false);

  function retainInput(event) {
    setFormInput(event.target.value);
  }

  function retainGen(event) {
    setCurrentGen(event.target.value);
  }

  function resetSearch() {
    setCurrentGen(0);
    setFormInput("");
    setReset(true);
  }

  function multipleSearch() {
    dispatch(searchStatesActions.startLoading());
    dispatch(searchStatesActions.clearError());

    let urlToFetch;

    currentGen !== 0
      ? (urlToFetch = `https://pokeapi.co/api/v2/generation/${currentGen}`)
      : (urlToFetch = `https://pokeapi.co/api/v2/pokemon/`);

    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => {
        dispatch(currentResultActions.deleteResult());
        let searchData;

        currentGen !== 0
          ? (searchData = data.pokemon_species)
          : (searchData = data.results);

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
        console.log(error);
        dispatch(searchStatesActions.setError());
        dispatch(currentResultActions.deleteResult());
        dispatch(searchStatesActions.stopLoading());
        console.log(`No encontramos a ${formInput}`);
      });
  }

  function searchPokemon() {
    event.preventDefault();

    multipleSearch();

    setFormInput("");
  }

  useEffect(() => {
    multipleSearch();
    setReset(false);
  }, [reset]);

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
        <GenSelector currentGen={currentGen} retainGen={retainGen} />

        <Button variant="contained" color="secondary" type="submit">
          Buscar
        </Button>

        <Button variant="contained" color="delete" onClick={resetSearch}>
          Reiniciar
        </Button>
      </Box>
    </form>
  );
};

export default SearchBar;
