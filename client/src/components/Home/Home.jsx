import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card  from "../Card/Card";
import {
    postPokemon,
    getAllPokemons,
    getByName,
    getByID,
    getTypes,
    detail,
    filterByType,
    filterBySource,
    orderByName,
    orderByAttack,
    resetPokemonsSearched,
    resetPokemons,
    nextPage,
    prevPage,
    handleNumber
} from "../../Redux/actions";

export default function Home(){
    const dispatch = useDispatch();
    const {
        allPokemons,
        pokemons,
        pokemonTypes,
        numPage
    } = useSelector((state) => state);
    
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("");
    const [typeFilter, setTypeFilter] = useState("All")
    
    return (
        <div className={styles.background}>
            <Link to={`/pokemons/`}>
            <Card></Card>
            </Link>
        </div>
    )
}
