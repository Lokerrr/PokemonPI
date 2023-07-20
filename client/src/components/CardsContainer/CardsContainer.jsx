import Card from "../Card/Card"
import style from "./CardsContainer.module.css"

export default function CardsContainer ({currentPokemons}){

    return (
        <div className={style.container}>
            {currentPokemons?.map((pokemon) => {
                return <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                img={pokemon.img}
                types={pokemon.types}
                attack={pokemon.attack}
                />
            })}
        </div>
    )
};