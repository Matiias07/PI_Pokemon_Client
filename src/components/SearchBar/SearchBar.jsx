import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { searchByName } from "../../redux/actions";
import styles from './SearchBar.module.css';

export default function SearchBar(){
    const [pokemonSearch, setPokemonSearch] = useState('');

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setPokemonSearch(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(searchByName(pokemonSearch));
    };

    const navigate = useNavigate();
    const handleNavigate = () => navigate('/form');

    useEffect(() => {
        if(pokemonSearch !== ""){
            const timeoutId = setTimeout(() => {
                dispatch(searchByName(pokemonSearch))
            }, 300);
            return () => clearTimeout(timeoutId);
        } else {
            dispatch(searchByName(pokemonSearch));
        }
    }, [pokemonSearch, dispatch]);

    return (
        <form onSubmit={handleSearch}>
            <div className={styles.searchbar}>
                <div className={`${styles.search}`}>
                    <input type='search' onChange={handleChange} value={pokemonSearch}/>
                    <div className={styles.button}>
                        <button>Search</button>
                        <button onClick={handleNavigate}>Create Pokemon</button>
                    </div>
                </div>
            </div>
        </form>
    )
}