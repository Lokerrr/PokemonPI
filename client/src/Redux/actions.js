import axios from 'axios';

export const POST_POKEMON = 'POST_POKEMON';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_TYPES = 'GET_TYPES';

export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";

export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_ATTACK = 'ORDER_ATTACK';

export const RESET_POKEMONS_SEARCHED = "RESET_POKEMONS_SEARCHED";
export const RESET_POKEMONS = "RESET_POKEMONS";

export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE ="PREV_PAGE";
export const HANDLE_NUMBER ="HANDLE_NUMBER";

export function postPokemon(pokemonData){
    return async (dispatch) => {
        const response = await axios.post(`http://localhost:3001/pokemons`, pokemonData);
        return dispatch({
            type: POST_POKEMON,
            payload: response.status,
        });
    };
};

export function getAllPokemons (){
    return async function (dispatch){
        const json = await axios.get(`http://localhost:3001/pokemons`).data;
        return dispatch({
            type : GET_ALL_POKEMONS,
            payload: json
        })
    }
};

export function getByName(name){
    return async function(dispatch){
        const json = await axios.get(`http://localhost:3001/pokemons?name=${name}`).data;
        return dispatch({
            type: GET_BY_NAME,
            payload: json
        })
    };
};

export function getByID(id){
    return async function(dispatch){
        const json = await axios.get(`http://localhost:3001/pokemons/${id}`).data;
        return dispatch({
            type: GET_BY_ID,
            payload: json
        })
    };
};

export function getTypes(id){
    return async function(dispatch){
        const json = await axios.get(`http://localhost:3001/types`).data;
        return dispatch({
            type: GET_TYPES,
            payload: json
        })
    };
};

export function detail(payload){
    return {
        type: CLEAN_DETAIL,
        payload
    }
};

export function filterByType(payload){
    return {
        type: FILTER_BY_TYPE,
        payload
    }
};

export function filterBySource(source){
    return {
        type: FILTER_BY_SOURCE,
        payload: source
    }
};

export function orderByName(payload){
    return {
        type: ORDER_BY_NAME,
        payload
    }
};

export function orderByAttack(order){
    return {
        type: ORDER_ATTACK,
        payload: order
    }
}

export function resetPokemonsSearched(){
    return {
        type: RESET_POKEMONS_SEARCHED,
    }
}

export function resetPokemons(){
    return {
        type: RESET_POKEMONS,
    }
}

export function nextPage(){
    return {
        type: NEXT_PAGE,
    }
}

export function prevPage(){
    return {
        type: PREV_PAGE,
    }
}

export function handleNumber(num){
    return {
        type: HANDLE_NUMBER,
        payload: num,
    }
}