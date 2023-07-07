import axios from 'axios';
import {
    GET_POKEMONS,
    GET_POKEMON,
    GET_TYPES,
    SEARCH_BY_NAME,
    FILTER_BY_SOURCE,
    FILTER_BY_TYPE,
    ORDER_BY
} from './actions-types';

export const getPokemons = () => {
    const endpoint = 'http://localhost:3001/pokemon';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);

            dispatch({
                type: GET_POKEMONS,
                payload: data
            });
        } catch (error) {
            return 'Algo salió mal. Intente de nuevo' + error.message;
        }
    };
};

export const getPokemon = (id) => {
    const endpoint = `http://localhost:3001/pokemon/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);

            dispatch({
                type: GET_POKEMON,
                payload: data
            });
        } catch (error) {
            return 'Algo salió mal. Intente de nuevo' + error.message;
        }
    };
};

export const getTypes = () => {
    const endpoint = 'http://localhost:3001/types';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);

            dispatch({
                type: GET_TYPES,
                payload: data
            });
        } catch (error) {
            return 'Algo salió mal. Intente de nuevo' + error.message;
        }
    };
};

export const postPokemon = (payload) => {
    console.log(payload);
    const endpoint = 'http://localhost:3001/pokemon'
    return async function(){
        try{
            const sendInfo = await axios.post(endpoint, payload)
            return sendInfo;
        } catch(error){
            return 'Algo salió mal. Intente de nuevo' + error.nessage;
        }
    };
};

export const searchByName = (payload) => {
    return {
        type: SEARCH_BY_NAME,
        payload
    };
};

export const filterBySource = (payload) => {
    return {
        type: FILTER_BY_SOURCE,
        payload
    };
};

export const filterByType = (createdAt) => {
    return {
        type: FILTER_BY_TYPE,
        payload: createdAt
    };
};

export const orderBy = (payload) => {
    return {
        type: ORDER_BY,
        payload
    };
};
