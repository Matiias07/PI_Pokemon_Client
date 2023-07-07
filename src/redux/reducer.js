import {
    GET_POKEMONS,
    GET_POKEMON,
    GET_TYPES,
    SEARCH_BY_NAME,
    FILTER_BY_SOURCE,
    FILTER_BY_TYPE,
    ORDER_BY,
    POST_POKEMONS
} from './actions-types';

const initialState = {
    pokemons: [],
    pokemonOrder: [],
    types: [],
    pokemon: {}
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload,
                pokemonOrder: payload
            };

        case GET_POKEMON:
            return {
                ...state,
                pokemon: payload
            };

        case GET_TYPES:
            return {
                ...state,
                types: payload
            };

        case POST_POKEMONS:
            return {
                ...state
            };

        case SEARCH_BY_NAME:
            return {
                ...state,
                pokemonOrder: state.pokemons.filter(pokemon => pokemon.name && pokemon.name.toLowerCase().includes(payload.toLowerCase())),
            };

        case FILTER_BY_SOURCE:
            let createdPokemons;
            if (payload === 'Db')
                createdPokemons = [...state.pokemons].filter(pokemon => pokemon.createdAt);
            if (payload === 'Api')
                createdPokemons = [...state.pokemons].filter(pokemon => !pokemon.createdAt);
            return {
                ...state,
                pokemonOrder: payload === 'Reset' ? state.pokemons : createdPokemons
            };

        case FILTER_BY_TYPE:
            if(payload === 'All'){
                return {...state,
                pokemonOrder: [...state.pokemons]} 
            }
        return {
                ...state,
                pokemonOrder: [...state.pokemons].filter(pokemon => pokemon.types.includes(payload))
            };


        case ORDER_BY:
            return {
                ...state,
                pokemonOrder: [...state.pokemonOrder].sort((a, b) => {
                    if (payload === 'A - Z') {
                        if (a.name < b.name) return -1;
                        return 0;
                    } else if (payload === 'Z - A') {
                        if (a.name > b.name) return -1;
                        return 0;
                    } else if (payload === 'Higher Attack') {
                        if (a.attack > b.attack) return -1;
                        return 0
                    } else if (payload === 'Lower Attack') {
                        if (a.attack < b.attack) return -1;
                        return 0;
                    } else if (payload === 'Higher HP') {
                        if (a.hp > b.hp) return -1;
                        return 0;
                    } else if (payload === 'Lower HP') {
                        if (a.hp < b.hp) return -1;
                        return 0;
                    } else if (payload === 'Higher Defense') {
                        if (a.defense > b.defense) return -1;
                        return 0;
                    } else if (payload === 'Lower Defense') {
                        if (a.defense < b.defense) return -1;
                        return 0;
                    }
                    return 0;
                }),
            };

        default:
            return { ...state };
    };
};

export default rootReducer;