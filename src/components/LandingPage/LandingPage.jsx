import { Link } from "react-router-dom";
import styles from './LandingPage.module.css';
import pikachu from "../../img/Pikachu.png";
import logo from "../../img/logoPokemon.png";

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.landing}>
                    <img src={pikachu} alt='Pikachu' />
                    <div className={styles.introLanding}>
                        <img src={logo} alt='Logo' />
                        <h1>!Bienvenidos a la Poke APP!</h1>
                    <Link to='/pokemons'>
                        <button>Home</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
