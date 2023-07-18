import React from "react";
import styles from "./Home.module.css";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../Redux/actions";

export default function Home(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPokemons());
    }, [dispatch])

    return (
        <div className={styles.background}>
            <div>
                <CardsContainer/>
                <div className={styles.search}>
                    <form>
                        <input 
                        type="text" 
                        placeholder="Encuentra tu Pokémon!" 
                        className={styles.input}
                        />
                        <button type="submit" className={styles.searchButton}>Buscar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}