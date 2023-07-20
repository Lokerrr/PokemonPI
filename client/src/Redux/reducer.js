import { POST_POKEMON, GET_ALL_POKEMONS, GET_BY_NAME, GET_BY_ID, GET_TYPES, FILTER_BY_TYPE, FILTER_BY_SOURCE, ORDER_BY_NAME, ORDER_ATTACK } from "./actions";

const initialState = {
    pokemons: [],
    allPokemons: [],
    detail: {},
    pokemonTypes: [],
}

function rootReducer(state = initialState, action){
    switch (action.type){
        default: return state;

        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            };
            
        case POST_POKEMON:
            return {
                ...state,
                allPokemons: action.payload,
            };


        case GET_BY_NAME:
            return {
                ...state,
                pokemons: action.payload,
            };

        case GET_BY_ID: 
            return {
                ...state,
                detail: {},
            };

        case GET_TYPES:
            return {
                ...state,
                pokemonTypes: action.payload
            };

        case FILTER_BY_TYPE:
            const type = action.payload
            const allPokemons = state.allPokemons;
            const typeFilter = 
            type === "all"
            ? allPokemons
            : allPokemons.filter((pokemon) => pokemon.types.includes(type));
            return {
                ...state,
                pokemons: typeFilter,
            };

        case FILTER_BY_SOURCE:
            const allPokemons2 = state.allPokemons
            const filtered2 = 
            action.payload === "db"
            ? allPokemons2.filter((pokemon) => pokemon.created === true)
            : allPokemons2.filter((pokemon) => pokemon.created === false)
            return {...state, pokemons: action.payload === "all" ? allPokemons2 : filtered2,
        }
        
        case ORDER_BY_NAME:
            let orderedPok =
          action.payload === "asc"
            ? state.pokemons.sort(function (a, b) {
                if (a.name > b.name) return 1;
                if (b.name > a.name) return -1;
                return 0;
              })
            : state.pokemons.sort(function (a, b) {
                if (a.name > b.name) return -1;
                if (b.name > a.name) return 1;
                return 0;
              });
            return { ...state, pokemons: action.payload = orderedPok };

        case ORDER_ATTACK:
            const order = action.payload;
        let orderedByAttack =
          order === "min"
            ? state.pokemons.sort((a, b) => a.attack - b.attack)
            : state.pokemons.sort((a, b) => b.attack - a.attack);
            return { ...state, pokemons: action.payload = orderedByAttack };
    }
}

export default rootReducer;