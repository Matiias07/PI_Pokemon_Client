import styles from '../Pagination/Pagination.module.css';

export default function Pagination({ pokemonsPerPag, allPokemons, paginado }) {
    const numbersPag = [];

    for(let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPag); i++){
        numbersPag.push(i);
    };

    return(
        <nav>
            <ul className={styles.pagination}>
                {numbersPag.map((numero) => (
                    <li key={numero}>
                        <button className={styles.activeButton} href="#" onClick={() => paginado(numero)}>{numero}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
