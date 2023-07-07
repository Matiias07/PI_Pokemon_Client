import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import styles from "../Home/HomePage.module.css";
import NavBar from "../NavBar/NavBar";
import Filtros from "../Filtros/Filtros";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allPokemons = useSelector((state) => state.pokemonOrder);
    
    if(allPokemons && typeof allPokemons[0] === "string"){
        navigate(0);
    }

    const [pagCurrent, setpagCurrent] = useState(1);
    const [pokemonPerPag] = useState(12);

    const indexLastPokemon = pagCurrent * pokemonPerPag;
    const indexFirstPokemon = indexLastPokemon - pokemonPerPag;
    const pokemonsCurrents = allPokemons?.slice(
        indexFirstPokemon,
        indexLastPokemon
    );

    const [loading, setLoading] = useState(true);

    const paginado = (numberPag) => {
        setpagCurrent(numberPag);
    };
    if (pokemonsCurrents.length > 0 && loading) {
        setLoading(false);
    }

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <NavBar></NavBar>
            <Filtros setPage={setpagCurrent} />

            <Pagination
                pokemonsPerPag={pokemonPerPag}
                allPokemons={allPokemons.length}
                paginado={paginado}
            />
            
            <p>Estas en la pagina: {pagCurrent}</p>

            <div className={styles.listCard}>
                {pokemonsCurrents?.length > 0 && !loading ? (
                    pokemonsCurrents &&
                    pokemonsCurrents?.map((element) => {
                        const name = element.name ? element.name.toUpperCase() : "";
                        const types = element.types;
                        return (
                            <Card
                                key={element.id}
                                id={element.id}
                                name={name}
                                image={element.image}
                                types={types}
                            />
                        );
                    })
                ) : !pokemonsCurrents?.length > 0 && loading ? (
                    <Loading></Loading>
                ) : (
                    <NotFound></NotFound>
                )}
            </div>
        </div>
    );
}
