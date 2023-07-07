import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemon } from "../../redux/actions";
import styles from "../DetailPage/DetailPage.module.css";
import NavBar from "../NavBar/NavBar";


export default function DetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemon)

    useEffect(() => {
        dispatch(getPokemon(id));
    }, [dispatch, id]);

    return (
        <div className={styles.containermaster}>

            <NavBar></NavBar>

            <div className={styles.title}>
                
                <label className={styles.titledetail}>POKEMON DETAILS</label>
                <label className={styles.titlename}>{pokemon.name ? pokemon.name.toUpperCase() : ""}</label>

                {pokemon.types
                        ? pokemon.types.map((type, index) => (
                            <h3 key={index} className={styles.types}>
                                TYPE {index + 1}:
                                <span key={index} className={styles[type]}>
                                    {type}
                                </span>
                            </h3>
                        ))
                    : ""}
            </div>

            <div className={styles.container}>
                <div className={styles.stat}>
                <label className={styles.titlesStats}>ID: <span className={styles.statname}>{pokemon.id}</span></label>
                <span className={styles.titleStat}>Stats </span>
                <div className={styles.substat}>
                    <label className={styles.titlesStats}>HP: <span className={styles.statname}>{pokemon.hp}</span></label>
                    <label className={styles.titlesStats}>ATTACK: <span className={styles.statname}>{pokemon.attack}</span></label>
                    <label className={styles.titlesStats}>DEFENSE: <span className={styles.statname}>{pokemon.defense}</span></label>
                    <label className={styles.titlesStats}>SPEED: <span className={styles.statname}>{pokemon.speed}</span></label>
                    <label className={styles.titlesStats}>HEIGHT: <span className={styles.statname}>{Number(pokemon.height) * 10} cm</span></label>
                    <label className={styles.titlesStats}>WEIGHT: <span className={styles.statname}>{Number(pokemon.weight) / 10} kg</span></label>
                </div>
                </div>

                <div className={styles.img}>

                    <img src={pokemon.image} alt="" />

                </div>
            </div>

        </div>
    )
}
