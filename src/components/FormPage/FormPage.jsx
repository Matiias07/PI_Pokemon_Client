import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTypes, postPokemon } from '../../redux/actions';
import validateForm  from '../FormPage/validate';
import NavBar from '../NavBar/NavBar';
import styles from '../FormPage/FormPage.module.css';

export default function FormPage(){
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const typesPokemon = useSelector((state) => state.types);

    const [errors, setErrors] = useState({

    })
    
    const [input, setInput] = useState({
        name: '',
        image: undefined,
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    });

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setErrors(validateForm({
            ...input,
            [event.target.name]: event.target.value
        }))
    }

    const handleSelect = (event) => {
        if(event.target.value === 'Select'){
            return
        }
        if(input.types.length > 1){
            return 
        }
        if(input.types.includes(event.target.value)){
            return 'Ya existe ese tipo'
        } else 
        setInput({
            ...input, types: [...input.types, event.target.value]
        })
        setErrors(validateForm({
            ...input,
            types: [...input.types, event.target.value]
        }))
    };
    console.log(errors);

    const handleTypes = (tipo) => {
        setInput({
            ...input,
            types: input.types.filter((type) => type !== tipo)
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(Object.keys(errors).length !== 0){
            alert('Aun hay errores, Intente de nuevo')
        } else {
            dispatch(postPokemon(input))
            alert('Pokemon creado correctamente');
            navigate('/pokemons')
        }
    }

    return (
        <div className={styles.containerAll}>
            <NavBar></NavBar>


            <h2 className={styles.title}>CREATE POKEMON</h2>

            <div className={styles.contenedorForm}>
                <form>

                    <div className={styles.Form}>
                        <div className={styles.divLeft}>

                            <div className={styles.insertInfo}>
                                <label htmlFor=''>Name: </label>
                                <input 
                                type='text'
                                name='name'
                                value={input.name}
                                onChange={handleChange}
                                placeholder='Name'
                                maxLength="20"
                                className={styles.inputs}
                                />
                            </div>
                            <div className={styles.error}>
                                {errors.name ? <span className={styles.error}> {errors.name}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor=''>Image: </label>
                                <input 
                                type='text'
                                name='image'
                                value={input.image}
                                onChange={handleChange}
                                className={styles.inputs}
                                />
                            </div>
                            <div className={styles.error}>
                            {errors.image ? <span className={styles.error}> {errors.image}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor=''>HP: </label>
                                <input
                                type='number'
                                name='hp'
                                value={input.hp}
                                onChange={handleChange}
                                placeholder='Min-1 Max-99'
                                className={styles.inputs}
                                />
                            </div>
                            <div className={styles.error}>
                            {errors.hp ? <span className={styles.error}> {errors.hp}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor=''>Attack: </label>
                                <input
                                type='number'
                                name='attack'
                                value={input.attack}
                                onChange={handleChange}
                                placeholder='Min-1 Max-150'
                                className={styles.inputs}
                                />
                            </div>
                            <div className={styles.error}>
                            {errors.attack ? <span className={styles.error}> {errors.attack}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor=''>Defense: </label>
                                <input
                                type='number'
                                name='defense'
                                value={input.defense}
                                onChange={handleChange}
                                placeholder='Min-1 Max-150'
                                className={styles.inputs}
                                />
                            </div>
                            <div className={styles.error}>
                            {errors.defense ? <span className={styles.error}> {errors.defense}</span> : null}
                            </div>
                            </div>

                            <div className={styles.divRight}>
                                <div className={styles.insertInfo}>
                                    <label htmlFor=''>Speed: </label>
                                    <input
                                    type='number'
                                    name='speed'
                                    value={input.speed}
                                    onChange={handleChange}
                                    placeholder='Min-1 Max-70'
                                    className={styles.inputs}
                                    />
                                </div>
                                <div className={styles.error}>
                            {errors.speed ? <span className={styles.error}> {errors.speed}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor=''>Height: </label>
                                <input
                                type='number'
                                name='height'
                                value={input.height}
                                onChange={handleChange}
                                placeholder='Min-1 Max-180'
                                className={styles.inputs}
                                />
                            </div>
                            <div className={styles.error}>
                            {errors.height ? <span className={styles.error}> {errors.height}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor=''>Weight: </label>
                                <input
                                type='number'
                                name='weight'
                                value={input.weight}
                                onChange={handleChange}
                                placeholder='Min-1 Max-200'
                                className={styles.inputs}
                                />
                            </div>
                            <div className={styles.error}>
                            {errors.weight ? <span className={styles.error}> {errors.weight}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor=''>Types: </label>
                                <select onChange={(event) => handleSelect(event)}>
                                    <option value='Select'>Select</option>

                                    {typesPokemon?.map((type) =>
                                    <option key={type.id} value={type.name}>{type.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className={styles.error}>
                            {errors.types && errors.types ? <span className={styles.error}> {errors.types}</span> : null}
                            </div>

                            <div className={styles.containerviewtypes}>

                                {input.types?.map((tipo) =>
                                <div className={styles.viewtype} key={tipo}> {tipo}
                                    <button className={styles.bndelet} onClick={() => handleTypes(tipo)}>X</button>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={styles.containerbnCreate}>
                        <button className={styles.bnCreate} onClick={(event) => handleSubmit(event)} type='button'>Create Pokemon</button>
                    </div>

                </form>
            </div>
        </div>
    )
}