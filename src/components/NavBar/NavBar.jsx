import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import logo from '../../img/logoPokemon.png';
import styles from './NavBar.module.css';

export default function NavBar(){

    return (
        <div>
            <div className={styles.navbar}>
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
                <div className={styles.search}>
                    <SearchBar />
                </div>
                <div className={styles.titlenav}>
                    <h1>PI Pokemons</h1>
                </div>
            </div>
        </div>
    );
};