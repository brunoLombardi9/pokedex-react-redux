import React from "react";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  const param = useParams();
  const pokemon = param.pokemon;

  function pokemonData() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  pokemonData();

  return <div>{pokemon}</div>;
};

export default CardDetail;
