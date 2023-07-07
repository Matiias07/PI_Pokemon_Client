import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterBySource,
    filterByType,
    getTypes,
    orderBy,
    searchByName,
} from "../../redux/actions";
import styles from "../Filtros/Filtros.module.css";

export default function Filtros({ setPage }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    const [name, setName] = useState("");

    const allPokemons = useSelector((state) => state.pokemonOrder);

    const handleFilterByType = (event) => {
        event.preventDefault();
        dispatch(filterByType(event.target.value, allPokemons));
        setPage(1);
    };

    const handleFilterBySource = (event) => {
        event.preventDefault();
        dispatch(filterBySource(event.target.value, allPokemons));
        setPage(1);
    };

    const handleOrderBy = (event) => {
        if (event.target.value === "orderBy") return;
        event.preventDefault();
        dispatch(orderBy(event.target.value));
        setPage(1);
    };

    const handleChance = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchByName(name));
        setName("");
        setPage(1);
    };

    return (
        <div className={styles.container}>
            <div className={styles.divTitle}>
                <h3>Filters</h3>
            </div>

            <div>
                <label> TYPES: </label>

                <select onChange={handleFilterByType}>
                    <option value='All'>ALL</option>
                    <option value='normal'>NORMAL</option>
                    <option value='grass'>GRASS</option>
                    <option value='fire'>FIRE</option>
                    <option value='water'>WATER</option>
                    <option value='flying'>FLYING</option>
                    <option value='rock'>ROCK</option>
                    <option value='bug'>BUG</option>
                    <option value='ground'>GROUND</option>
                    <option value='fighting'>FIGHTING</option>
                    <option value='electric'>ELECTRIC</option>
                    <option value='poison'>POISON</option>
                    <option value='ghost'>GHOST</option>
                    <option value='ice'>ICE</option>
                    <option value='steel'>STEEL</option>
                    <option value='dark'>DARK</option>
                    <option value='psychic'>PSYCHIC</option>
                    <option value='dragon'>DRAGON</option>
                    <option value='fairy'>FAIRY</option>
                    <option value='shadow'>SHADOW</option>
                    <option value='unknown'>UNKNOWN</option>
                </select>
            </div>
            <div>
                <label>FILTER BY SOURCE: </label>

                <select onChange={handleFilterBySource}>
                    <option value='Reset'>RESET</option>
                    <option value='Api'>API</option>
                    <option value='Db'>DB</option>
                </select>
            </div>
            <div>
                <label>ORDER BY: </label>
                <select onChange={handleOrderBy}>
                    <option value='All'>ORDER</option>
                    <option value='A - Z'>A - Z</option>
                    <option value='Z - A'>Z - A</option>
                    <option value='Higher Attack'>HIGHER ATTACK</option>
                    <option value='Lower Attack'>LOWER ATTACK</option>
                    <option value='Higher HP'>HIGHER HP</option>
                    <option value='Lower HP'>LOWER HP</option>
                    <option value='Higher Defense'>HIGHER DEFENSE</option>
                    <option value='Lower Defense'>LOWER DEFENSE</option>

                </select>
            </div>

            <div className="search_nav">

                <label>SEARCH BY NAME: <input 
                value={name}
                onChange={(event) => handleChance(event)}
                type="text"
                autoComplete="on"
                placeholder="Name..."/></label>

                <input className={styles.bnbsearch} id="query" onClick={handleSubmit} type="submit" value="Search" />

            </div>
        </div>
    );
}
