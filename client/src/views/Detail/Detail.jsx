// import React from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import style from "./Detail.module.css"

export default function Detail (){

    // const id = useParams();
    const pokemons = useSelector(state=> state.pokemons)
    // const pokemon = allPokemons.filter((pokemon) => pokemon.id === id);
    return console.log(pokemons);
}