import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ name, types, image, id }){
    return(
        <div key={id}>
            <div className={styles.card}>
                <h1>{name}</h1>
                <Link to={`/pokemons/${id}`}>
                <img src={image} alt={name}/>
                </Link>
                <div className={styles.types}>
                    {types.map((type, index) => (
                        <span key={index} className={styles[type]}>
                            {type}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}