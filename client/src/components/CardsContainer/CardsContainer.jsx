import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from "./CardsContainer.module.css"

export default function CardsContainer (){
  const pokemons = useSelector(state=>state.pokemons)
  
    return (
        <div className={style.container}>
            {pokemons.map((pokemon) => {
                return <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                img={pokemon.img}
                types={pokemon.types}
                />
            })}
        </div>
    )
};