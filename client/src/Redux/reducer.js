import {
POST_POKEMON,
GET_ALL_POKEMONS,
GET_BY_NAME,
GET_BY_ID,
GET_TYPES,
CLEAN_DETAIL,
FILTER_BY_TYPE,
FILTER_BY_SOURCE,
ORDER_BY_NAME,
ORDER_ATTACK,
RESET_POKEMONS_SEARCHED,
RESET_POKEMONS,
NEXT_PAGE,
PREV_PAGE,
HANDLE_NUMBER
} from "./actions";

const initialState = {
    allPokemons: [],
    pokemons: [],
    pokemonTypes: [],
    details: {},
    searchedPokemons: [],
    numPage: 1,
}

function rootReducer(state = initialState, action){
    switch (action.type){
        case POST_POKEMON:
            return {
                ...state,
                allPokemons: action.payload,
                pokemons: action.payload,
            };

        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            };

        case GET_BY_NAME:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            };

        case GET_BY_ID: 
            return {
                ...state,
                details: action.payload,
            };

        case GET_TYPES:
            return {
                ...state,
                pokemonTypes: action.payload
            };

        case CLEAN_DETAIL:
            return {
                ...state,
                details: [],
            };

        case FILTER_BY_TYPE:
            const allPokemons = state.allPokemons;
            const typeFilter = 
            action.payload === "All"
            ? allPokemons
            : allPokemons.filter((pokemon) => {
                return pokemon.type.find((reqType) => reqType.name === action.payload)
            });
            return {
                ...state,
                pokemons: typeFilter,
                allPokemons: typeFilter,
            };

        case FILTER_BY_SOURCE:
            const stateCopy = [...state.allPokemons];
            const fromApi = stateCopy.filter((pokemon) => !isNaN(+pokemon.id));
            const fromBDD = stateCopy.filter((pokemon) => isNaN(+pokemon.id));
            return {
                ...state,
                pokemons: 
                action.payload === "API" 
                ? fromApi 
                : action.payload === "BDD" 
                ? fromBDD 
                : stateCopy,
            };
        
        case ORDER_BY_NAME:
            let order =
            action.payload === "asc"
            ? state.pokemons.sort(function (a, b) {
                if (a.title.toLowerCase() > b.title.toLowerCase()){
                    return 1;
                }
                if (b.title.toLowerCase() > a.title.toLowerCase()){
                    return -1;
                }
                return 0;
            })
            :
            state.pokemons.sort(function(a, b) {
                if (a.title.toLowerCase() > b.title.toLowerCase()){
                    return -1;
                }
                if (b.title.toLowerCase() > a.title.toLowerCase()){
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                pokemons: order
            };

        case ORDER_ATTACK:
            let orderAttack =
            action.payload === "menormayor"
            ? state.pokemons.sort(function (a, b){
                if(a.attack > b.attack){
                    return 1;
                }
                if(b.attack > a.attack){
                    return -1;
                }
                return 0;
            })
            : state.pokemons.sort(function (a, b){
                if (a.attack > b.attack){
                    return 1;
                }
                if (b.attack > a.attack){
                    return -1;
                }
                return 0;
            });
            return {
                ...state,
                pokemons: orderAttack,
            };

        case RESET_POKEMONS_SEARCHED:
            return {
                ...state,
                pokemons: [...state.searchedPokemons],
            };
        case RESET_POKEMONS:
            return {
                ...state,
                pokemons: [...state.allPokemons],
                searchedPokemons: [],
            };
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1,
            };
        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1,
            };
        case HANDLE_NUMBER:
            return {
                ...state,
                numPage: action.payload
            }
    }
}

export default rootReducer;