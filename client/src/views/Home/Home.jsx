import React from "react";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getTypes } from "../../Redux/actions";

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filters from "../../components/Filter/Filters";
import Sort from "../../components/Sort/Sort"
export default function Home(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemons());
        dispatch(getTypes());
    }, [dispatch])

    const types = useSelector((state) => state.pokemonTypes);
    const allPokemons = useSelector((state) => state.allPokemons)

    const [order, setOrder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)

    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const handleRefresh = () => {
        dispatch(getAllPokemons())
        setCurrentPage(1)
        setPokemonsPerPage(10)
      }

    return (
        <div className={styles.background}>
            <div className={styles.selectContainer}>
            <Filters types={types} setOrder={setOrder} setCurrentPage={setCurrentPage}/>
            <button className={styles.button}onClick={handleRefresh}>Reset</button>
            <Sort setOrder={setOrder} setCurrentPage={setCurrentPage}/>
            </div>
            <div>
                <CardsContainer currentPokemons={currentPokemons}/>
            </div>
        </div>
    )
}