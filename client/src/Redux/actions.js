import axios from 'axios';

export const POST_POKEMON = 'POST_POKEMON';
export function postPokemon(pokemonData){
    return async function (dispatch) {
        try {
            const response = await axios.post(`http://localhost:3001/pokemons`, pokemonData);
            if(response) {
                return dispatch({
                    type: POST_POKEMON,
                    payload: response.data,
                });
            }
        } catch (error) {
            alert(error.response.data.error)
        }
    };
}

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export function getAllPokemons(){
    return async function (dispatch){
        try {
        const json = await axios.get(`http://localhost:3001/pokemons`);
        dispatch({
            type : GET_ALL_POKEMONS,
            payload: json.data
        });
        } catch (error) {
            alert("Cannot get All Pokémons")
        }
    }
};

export const GET_BY_NAME = 'GET_BY_NAME';
export function getByName(name){
    return async function(dispatch){
        try {
        const json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
        dispatch({
            type: GET_BY_NAME,
            payload: json.data
        });
    } catch (error) {
        alert(`Cannot found name ${name}`)
    }
    };
};

export const GET_BY_ID = 'GET_BY_ID';

export function getByID(id){
    return async function(dispatch){
        try {
        const json = await axios.get(`http://localhost:3001/pokemons/${id}`);
        dispatch({
            type: GET_BY_ID,
            payload: json.data
        })
        } catch (error) {
            console.log(error);
        }
    }
};

export const GET_TYPES = 'GET_TYPES';
export function getTypes(){
    return async function(dispatch){
        try {
            const json = await axios.get(`http://localhost:3001/types`);
            return dispatch({
                type: GET_TYPES,
                payload: json.data
            });
        } catch (error){
            console.log(error);
        }
    };
};


export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export function filterByType(type){
    return function (dispatch){
        console.log(type);
    return dispatch({
        type: FILTER_BY_TYPE,
        payload: type,
    });
  };
}

export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export function filterBySource(source){
    return { type: FILTER_BY_SOURCE, payload: source };
};

export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export function orderByName(order){
    return function (dispatch){
    return dispatch ({
        type: ORDER_BY_NAME,
        payload: order
    });
    };
};

export const ORDER_ATTACK = 'ORDER_ATTACK';
export function orderByAttack(attackLevel){
    return {
        type: ORDER_ATTACK,
        payload: attackLevel
    }
}
